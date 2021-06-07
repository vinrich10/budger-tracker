const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://vinrich:test123@cluster0.hwtuw.mongodb.net/testretryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

  let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
  console.log(`App running on port ${PORT}!`);
});
