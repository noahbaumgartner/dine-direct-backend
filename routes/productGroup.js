const express = require("express");
const ProductGroup = require("../models/productGroup");
const router = express.Router();

router
  .get("/", (request, response) => {
    ProductGroup.findAll()
      .then((records) => {
        response.json(records);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500);
      });
  })
  .post("/", (request, response) => {
    const { name } = request.body;
    ProductGroup.create({
      name: name,
    })
      .then((record) => {
        response.status(201).json({
          message: "Record created successfully",
          record: record,
        });
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500);
      });
  })
  .delete("/:id", (request, response) => {
    ProductGroup.destroy({
      where: { id: request.params.id },
    })
      .then((record) => {
        response.status(201).json({
          message: "Record deleted successfully",
          record: record,
        });
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        response.status(500);
      });
  });

module.exports = router;
