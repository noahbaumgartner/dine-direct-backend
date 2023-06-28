/**
 * @swagger
 * tags:
 *   name: Order
 *   description: A new order
 * /order:
 *   post:
 *     summary: Create a new Order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *     responses:
 *       500:
 *         description: Some server error
 *
 */

const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get((req, res) => {})
  .post((req, res) => {});

module.exports = router;
