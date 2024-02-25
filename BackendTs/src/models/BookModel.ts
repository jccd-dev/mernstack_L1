import mongoose, { Schema, model } from "mongoose";
import { BookModel } from "../types/book_types";

const bookSchema = new Schema<BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model<BookModel>("Book", bookSchema);
