const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");

const productGroupRouter = require("./routes/productGroup");
const productRouter = require("./routes/product");

const spaceRouter = require("./routes/space");
const tableRouter = require("./routes/table");

const clientRouter = require("./routes/client");
const orderRouter = require("./routes/order");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// general
const app = express();
app.use(express.json());

// cors
app.use(cors());

// routes
app.use("/productGroups", productGroupRouter);
app.use("/products", productRouter);
app.use("/spaces", spaceRouter);
app.use("/tables", tableRouter);
app.use("/clients", clientRouter);
app.use("/orders", orderRouter);

// logger
app.use(logger);
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
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.listen(8000);
