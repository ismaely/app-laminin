const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = require("./database/db");
db.on("error", console.error.bind(console, "connection error:"));

app.use(require("./router/index.router"));

app.listen(port, () => {
  console.log(`servidor is run: http://localhost:${port}`);
});
