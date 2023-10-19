const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");

const productGroupRouter = require("./routes/productGroup");
const productRouter = require("./routes/product");
const spaceRouter = require("./routes/space");
const clientRouter = require("./routes/client");
const orderRouter = require("./routes/order");
const printerTemplateRouter = require("./routes/printTemplate");
const printerJobRouter = require("./routes/printJob");
const printerRouter = require("./routes/printer");
const printRouter = require("./routes/print");
const menuRouter = require("./routes/menu");
const menuGroupsRouter = require("./routes/menuGroup");
const databaseRouter = require("./routes/database");
const modifierGroupRouter = require("./routes/modifierGroup");

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
app.use("/clients", clientRouter);
app.use("/orders", orderRouter);
app.use("/printTemplates", printerTemplateRouter);
app.use("/printJobs", printerJobRouter);
app.use("/printers", printerRouter);
app.use("/print", printRouter);
app.use("/menus", menuRouter);
app.use("/menuGroups", menuGroupsRouter);
app.use("/database", databaseRouter);
app.use("/modifierGroups", modifierGroupRouter);

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
