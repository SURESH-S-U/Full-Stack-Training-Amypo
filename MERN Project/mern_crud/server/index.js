const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/peopleDB") // We should add DB name with url. Not connection or collection name.
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Model
const Person = mongoose.model(
  "Person", // Model name (Local name) of the collection people.
  { name: String, age: Number },
  "people"  // Actual collection name in database.
);

// READ
app.get("/", async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

// POST (Create)
app.post("/", async (req, res) => {
  const newPerson = new Person(req.body);
  await newPerson.save();
  res.json(newPerson);
});

// PUT (Update)
app.put("/:id", async (req, res) => {
  const updated = await Person.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
