require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Note = require("./models/Note");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Server working");
});

// GET all notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// CREATE note
app.post("/notes", async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      text: req.body.text
    });

    await note.save();
    res.json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save note" });
  }
});

// UPDATE note
app.put("/notes/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        text: req.body.text
      },
      { new: true }
    );

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// DELETE note
app.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});