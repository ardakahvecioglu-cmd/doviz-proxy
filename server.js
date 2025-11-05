import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Altın fiyatı (Genelpara)
app.get("/altin", async (req, res) => {
  try {
    const r = await fetch("https://api.genelpara.com/embed/altin.json");
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Altın verisi alınamadı" });
  }
});

// Döviz fiyatları (Genelpara)
app.get("/doviz", async (req, res) => {
  try {
    const r = await fetch("https://api.genelpara.com/embed/doviz.json");
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Döviz verisi alınamadı" });
  }
});

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Proxy aktif ✅ /altin ve /doviz uçları çalışıyor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
