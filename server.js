import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/altin", async (req, res) => {
  try {
    const r = await fetch("https://finans.truncgil.com/v3/today.json");
    const d = await r.json();
    res.json(d);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

app.get("/doviz", async (req, res) => {
  try {
    const r = await fetch("https://api.exchangerate.host/latest?base=TRY&symbols=USD,EUR,GBP");
    const d = await r.json();
    res.json(d);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

app.listen(3000, () => console.log("Proxy çalışıyor 🚀"));
