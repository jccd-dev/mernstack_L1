import app from "./app";
import dotenv from "dotenv";
import { dbconn } from "./db/mongodb";

dotenv.config();
dbconn();

const PORT: any = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Runing on Port ${PORT}`);
});
