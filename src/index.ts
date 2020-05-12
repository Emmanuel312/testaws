import express from "express";

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ test: "ci cd" });
});

app.listen(PORT, HOST, () => console.log("Server on por 3000"));