import cors from "cors";
import express from "express";
import { getBalance } from "./balance";
import { getExtract } from "./extract";

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/balance", async (_, response) => {
  const balance = await getBalance();
  console.log(balance);
  response.status(200).json(balance);
});

app.get("/extract", async (_, response) => {
  const extract = await getExtract();
  console.log(extract);
  response.status(200).json(extract);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
