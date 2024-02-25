import express from "express";
import {
  createBookSchema,
  getBookSchema,
  updateBookSchema,
} from "../validations/bookValidationSchema";
import validate from "../middlewares/validate";
import {
  createBookController,
  deleteBook,
  getABook,
  getBooks,
  updateBook,
} from "../controllers/bookController";
import { asyncErrorHandler } from "./../utils/asyncErrorHandler";

const router = express.Router();

router.post(
  "/",
  createBookSchema,
  validate,
  asyncErrorHandler(createBookController)
);

router.get("/", asyncErrorHandler(getBooks));
router.get("/:id", getBookSchema, validate, asyncErrorHandler(getABook));
router.put("/:id", updateBookSchema, validate, asyncErrorHandler(updateBook));
router.delete("/:id", getBookSchema, validate, asyncErrorHandler(deleteBook));

export default router;
