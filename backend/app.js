import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./db/db.js";
import transictionRoute from "./routes/transictionRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

//routes
transictionRoute(app);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
