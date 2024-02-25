import { Request, Response, NextFunction } from "express";
import { BookModel } from "../types/book_types";
import { Book } from "../models/BookModel";
import NotFoundError from "../errors/NotFoundError";

export const createBookController = async (req: Request, res: Response) => {
  const newBook = new Book(req.body);

  const createdBook = await newBook.save();

  return res.status(200).json(createdBook);
};

export const getBooks = async (req: Request, res: Response) => {
  const books = await Book.find({});

  return res.status(200).json({ count: books.length, books: books });
};

export const getABook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  return res.status(200).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body);

  return res.status(200).send({ message: "Book Updated" });
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Book.findByIdAndDelete(id);

  if (!result) {
    throw new NotFoundError({
      code: 404,
      message: "Data Not Found",
      context: { msg: "Book Not Found" },
    });
  }

  return res.status(200).send({ msg: "Book Deleted Successfuly" });
};
