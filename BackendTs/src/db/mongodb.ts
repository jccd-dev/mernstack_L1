import mongoose from "mongoose";

/**
 * Function to establish a connection with MongoDB using mongoose
 * with retry logic.
 */
const connectWithRetry = async () => {
  const options = {
    serverSelectionTimeoutMS: 5000,
  };
  const MONGO_URL: string | undefined = process.env.MONGO_URL; // Use environment variable

  try {
    if (!MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not set");
    }

    await mongoose.connect(MONGO_URL, options);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    console.log("Retrying for connection");

    setTimeout(connectWithRetry, 5000);
  }
};

/**
 * Function to handle MongoDB connection events.
 */
export const dbconn = async () => {
  // Establish connection with retry logic
  await connectWithRetry();

  // Event handlers for Mongoose connection events
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

  // Graceful termination of MongoDB connection on app termination
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed, due to app termination");
    process.exit(0);
  });
};
