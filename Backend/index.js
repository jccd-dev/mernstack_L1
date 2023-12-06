import express from "express";
import { PORT, mongoDbURL } from "./config/config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

//custom cors config------
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome");
});

//book routes
app.use("/books", booksRoute);

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`app is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
