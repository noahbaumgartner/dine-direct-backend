const express = require("express");
const PrintService = require("../services/printService");
const router = express.Router();

router.post("/", (request, response) => {
  const { PrintJobId } = request.body;
  PrintService.print(PrintJobId)
    .then((record) => {
      response.status(201).json({
        message: "Record created successfully",
        record: record,
      });
    })
    .catch((error) => {
      console.error("Error occurred: ", error);
      response.status(500).send();
    });
});

module.exports = router;
