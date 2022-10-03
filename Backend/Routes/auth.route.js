const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");
const express = require("express");
require("dotenv").config();
const router = express.Router();

const newtoken = (user) => {
  return jwt.sign(
    {
      data: user,
    },
    process.env.SECRET,
    { expiresIn: "12d" }
  );
};
router.post(
  "/register",
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("fullName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Full Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("Full Name must be at least 4 characters"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .custom((value) => {
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
      if (!value.match(passw)) {
        throw new Error("Password must be strong");
      }
      return true;
    }),
  

  async function (req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
     
      const user = await User.create({
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password,
      });
      return res.status(201).send({
        message: "Registration successfull",
        data: user,
      });
    } catch (err) {
      return res.status(500).send({ message: err.message, data: err });
    }
  }
);

router.post(
  "/login",
  body("email").not().isEmpty().isEmail().withMessage("Email is required"),
  body("password").not().isEmpty().withMessage("Password is required"),
  async function (req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.findOne({ email: req.body.email });
      if (user) {
        //check Password
        const match = user.checkPassword(req.body.password);
        if (match) {
          let token = newtoken(user);
          return res.status(200).send({
            message: "Login successfull",
            data: user,
            token: token,
          });
        } else {
          return res.status(400).send({
            message: "Incorrect credentials",
            data: {},
          });
        }
      } else {
        return res.status(400).send({
          message: "User is not Registered",
          data: {},
        });
      }
    } catch (err) {
      return res.status(500).send({ message: err.message, data: err });
    }
  }
);

module.exports = router;
