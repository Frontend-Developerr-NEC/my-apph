console.log("Backend Running!...");
import express from "express";
import cors from "cors";
const app = express.Router();

app.use(cors);

app.get("/", (req, res) => {
  res.send({ data: "Datas" });
  // console.log("log");
});

const port = 8000;


app.all("*", (req, res) => {
    res.send("kiomkjjk");
});


app.connect(port, () => {
  console.log("Connected");
});