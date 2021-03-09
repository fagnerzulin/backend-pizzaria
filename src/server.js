import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT_LISTEN, () => {
  console.log(`Listen on port ${process.env.PORT_LISTEN}`);
});
