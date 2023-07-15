const express = require("express");
const router = express.Router();
const databaseUpload = require("../config/databaseUpload");

router
  .get("/export", (request, response) => {
    const file = "./dino.db";
    response.download(file);
  })
  .post("/import", databaseUpload.single("file"), (request, response) => {
    response.send("File uploaded");
  });

module.exports = router;
