import { checkSchema } from "express-validator";

export const createBookSchema = checkSchema({
  title: {
    in: ["body"],
    isString: {
      errorMessage: "Title Must be a string",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Title is required",
    },
    isLength: {
      options: { max: 156 },
      errorMessage: "Maximum character is 156",
    },
  },
  author: {
    in: ["body"],
    isString: {
      errorMessage: "Author Must be a string",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Author is required",
    },
  },
  publishYear: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Publish Year required",
    },
    isNumeric: {
      errorMessage: "Publish Year must be number",
    },
  },
});

export const getBookSchema = checkSchema({
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Book Id is invalid",
    },
  },
});

export const updateBookSchema = checkSchema({
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Book Id is invalid",
    },
  },
  title: {
    in: ["body"],
    isString: {
      errorMessage: "Title Must be a string",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Title is required",
    },
    isLength: {
      options: { max: 156 },
      errorMessage: "Maximum character is 156",
    },
  },
  author: {
    in: ["body"],
    isString: {
      errorMessage: "Author Must be a string",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Author is required",
    },
  },
  publishYear: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Publish Year required",
    },
    isNumeric: {
      errorMessage: "Publish Year must be number",
    },
  },
});
