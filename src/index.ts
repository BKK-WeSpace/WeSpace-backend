import express from "express";
import treesRequestHandler from "./services/treesRequestHandler";

const app = express();
const port = 3000;

app.get("/ping", function (_, res) {
  res.send("pong");
});

app.post("/trees", async function (req, res) {
  res.send(await treesRequestHandler(req.body));
});

app.post("/tree", function (req, res) {
  res.send("Hello World!");
});

app.post("/upload", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
