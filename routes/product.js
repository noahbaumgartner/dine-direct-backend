const express = require("express");
const router = express.Router();

const ProductService = require("../services/productService");

router
  .get("/", (request, response) => {
    ProductService.getAll()
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .get("/:id", (request, response) => {
    ProductService.get(request.params.id)
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500).send();
      });
  })
  .post("/", (request, response) => {
    const { name, price } = request.body;
    ProductService.create(name, price)
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
    const { name, price } = request.body;
    ProductService.update(request.params.id, name, price)
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
    ProductService.delete(request.params.id)
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
