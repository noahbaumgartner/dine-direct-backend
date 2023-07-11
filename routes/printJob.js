const express = require("express");
const PrintJobService = require("../services/printJobService");
const router = express.Router();

router
  .get("/", (request, response) => {
    PrintJobService.getAll()
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .get("/:id", (request, response) => {
    PrintJobService.get(request.params.id)
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .post("/", (request, response) => {
    const { name, PrintTemplateId, PrinterId } = request.body;
    PrintJobService.create(name, PrintTemplateId, PrinterId)
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
  })
  .put("/:id", (request, response) => {
    const { name } = request.body;
    PrintJobService.update(request.params.id, name)
      .then((record) => {
        response.status(201).json({
          message: "Record updated successfully",
          record: record,
        });
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .delete("/:id", (request, response) => {
    PrintJobService.delete(request.params.id)
      .then((record) => {
        response.status(201).json({
          message: "Record deleted successfully",
          record: record,
        });
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  });

module.exports = router;
