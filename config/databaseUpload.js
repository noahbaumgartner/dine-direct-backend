const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
  filename: (req, file, cb) => {
    cb(null, "dino.db");
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
