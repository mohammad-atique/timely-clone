const multer = require("multer")
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../my-uploads"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  const uploads = multer({ storage: storage })

// const fileFilter = (req, file, callback) => {
//   // The function should call `callback` with a boolean
//   // to indicate if the file should be accepted

//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     // To accept the file pass `true`, like so:
//     callback(null, true);
//   } else {
//     // To reject this file pass `false`, like so:
//     callback(new Error("Incorrect mime type"), false);
//   }
// };

// const options = {
//   storage:storage
// };

// // 1kb = 1024 bytes
// // 1mb = 1024 kb

// const uploads = multer(options);

module.exports = uploads;