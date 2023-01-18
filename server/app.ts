import express, { Request, Response } from "express";

const userRoutes = require("./routes/user-routes");

const app = express();

const PORT = process.env.PORT;

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
