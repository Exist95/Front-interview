const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const usersRoute = require("./routes/users-routes");
const questionRoute = require("./routes/question-routes");
const app = express();

app.use(bodyParser.json());


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.use("/api/users", usersRoute);

app.use("/api/question", questionRoute);

module.exports = app;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listen(8080, () => console.log("Connected server")))
  .catch((err) => console.log(err));
