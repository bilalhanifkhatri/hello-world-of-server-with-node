import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/water", (req, res) => {
  console.log(`${req.ip} is asking for water.`);
  res.send(`<h1>Take this water</h1>`);
});

app.get("/food", (req, res) => {
  console.log(`${req.ip} is asking for food.`);
  res.send(`<h1>Take this food</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
