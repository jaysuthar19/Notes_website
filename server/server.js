require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

const {
  notFound,
  errorHandler
} = require("./middleware/errorMiddleware");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

/* -------------------- DATABASE -------------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* -------------------- ROUTES -------------------- */

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/blogs", blogRoutes);

app.use("/api/auth", authRoutes);

/* -------------------- ERROR MIDDLEWARE -------------------- */

app.use(notFound);

app.use(errorHandler);

/* -------------------- SERVER -------------------- */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});