const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const usersRoute = require("./routes/users-routes");
const questionRoute = require("./routes/question-routes");
const app = express();

app.use(bodyParser.json());

app.use("/api/users", usersRoute);

app.use("/api/question", questionRoute);

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://manu:qeqe4646adad1313@cluster0.igsxtdm.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => app.listen(8080, () => console.log("Connected server")))
  .catch((err) => console.log(err));
