import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
const app = express();
//env config
dotenv.config();
//port
const PORT = process.env.PORT || 8080;

//connect Database
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/auth", authRoutes);
//home route
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
