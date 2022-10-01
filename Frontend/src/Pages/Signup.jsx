import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import SignupNavbar from "../Components/SignupSec/SignupNavbar";
const Signup = () => {
  const [data, setData] = useState({});
  const inputFile = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    formData.append("image", inputFile.current.files[0]);
    axios
      .post("http://localhost:5000/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => console.log(r.data))
      .catch((e) => console.log(e.error));
  };

  return (
    <div>
      {/* <h4>Signup</h4> */}
      <SignupNavbar />
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Full Name"
          name="fullName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />
        <input type="file" ref={inputFile} />
        <input type={"submit"} value="register" />
      </form> */}
    </div>
  );
};

export default Signup;
