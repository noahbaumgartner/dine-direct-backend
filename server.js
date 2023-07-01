const express = require("express");
const app = express();
const sequelize = require("./config/database");

const productGroupRouter = require("./routes/productGroup");
const productRouter = require("./routes/product");
const productAssignmentRouter = require("./routes/productAssignment");
const modifierRouter = require("./routes/modifier");

const spaceRouter = require("./routes/space");
const tableRouter = require("./routes/table");

const clientRouter = require("./routes/client");
const orderRouter = require("./routes/order");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(logger);

app.use(express.json());

app.use("/productGroups", productGroupRouter);
app.use("/products", productRouter);
app.use("/productAssignments", productAssignmentRouter);
app.use("/modifiers", modifierRouter);
app.use("/spaces", spaceRouter);
app.use("/tables", tableRouter);
app.use("/clients", clientRouter);
app.use("/orders", orderRouter);

// logger
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// sequelize init
sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created!");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

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
