const express = require("express");
const connectDatabase = require("./helpers/Database/mongodb.database");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./Routers");

//Port Configuration

dotenv.config({ path: "./Config/env/config.env" });

// MongoDb Connection
connectDatabase();

// Creating Our Server

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Security
app.use(cors());

// Routes

app.use("/api", routes);

// Starting Our Server
app.listen(PORT, () => {
  console.log(`App Started on ${PORT}`);
});
