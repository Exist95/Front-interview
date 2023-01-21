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
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.igsxtdm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => app.listen(8080, () => console.log("Conneting Server")))
  .catch((err) => console.log(err));
