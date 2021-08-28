const express = require("express");
const connectDatabase = require("./helpers/Database/mongodb.database");
const cors = require("cors");
const routes = require("./Routers");

// MongoDb Connection
connectDatabase();

// Creating Our Server

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

// Security
app.use(cors());

// Routes

app.use("/api", routes);

// Starting Our Server
app.listen(PORT, () => {
  console.log(`App Started on ${PORT}`);
});
