const express = require("express");
const router = express.Router();

const ProductGroupService = require("../services/productGroupService");
const ProductAssignmentService = require("../services/productAssignmentService");
const req = require("express/lib/request");

router
  .get("/", (request, response) => {
    ProductGroupService.getAll()
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .get("/:id", (request, response) => {
    ProductGroupService.get(request.params.id)
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .post("/", (request, response) => {
    const { name } = request.body;
    ProductGroupService.create(name)
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
    ProductGroupService.update(request.params.id, name)
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
    ProductGroupService.delete(request.params.id)
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
  })
  .get("/:id/productAssignments", (request, response) => {
    ProductAssignmentService.getAllForProductGroup(request.params.id)
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .post("/:id/productAssignments", (request, response) => {
    const { productId } = request.body;
    ProductAssignmentService.create(request.params.id, productId)
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .delete("/:id/productAssignments/:productId", (request, response) => {
    ProductAssignmentService.delete(request.params.id, request.params.productId)
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
