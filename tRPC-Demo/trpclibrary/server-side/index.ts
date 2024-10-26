import express from "express";

const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello from server-side");
});

app.listen(port, () => {
  console.log(`server-side listening at http://localhost:${port}`);
});
