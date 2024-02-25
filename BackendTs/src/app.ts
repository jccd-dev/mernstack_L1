import express, { Express, Request, Response } from "express";
import cors from "cors";
import _404 from "./middlewares/_404";
import ErrorHandler from "./middlewares/ErrorHandler";
import bookRoutes from "./routes/bookRoutes";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api/book", bookRoutes);

app.use(_404);
app.use(ErrorHandler);

export default app;
