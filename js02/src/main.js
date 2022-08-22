import express from "express";
import ssr from "./ssr";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(ssr());
});

app.listen(port, () => {
  console.log("fuga");
});
