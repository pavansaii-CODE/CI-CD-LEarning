const express = require("express");

const app = express();

const employees = [
  { id: 1, name: "Rahul", role: "Developer" },
  { id: 2, name: "Priya", role: "Tester" }
];

app.get("/", (req, res) => {
  res.send("Employee API is running!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
