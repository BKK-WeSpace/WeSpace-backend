import express from "express";

const app = express();
const port = 3000;

app.get("/ping", function (_, res) {
  res.send("pong");
});

app.get("/trees", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
