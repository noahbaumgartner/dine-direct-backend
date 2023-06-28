const express = require("express");
const app = express();

const orderRouter = require("./routes/order");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(logger);
app.use("/order", orderRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// swagger
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Dine Direct API",
      version: "0.1.0",
      description: "",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(3000);
