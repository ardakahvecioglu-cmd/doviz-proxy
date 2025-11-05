# Döviz Proxy (Render Uyumlu)
Bu Node.js proxy sunucusu, CORS hatalarını aşarak canlı döviz ve altın verilerini getirir.
Hiçbir API key gerektirmez ve Render üzerinde sorunsuz çalışır.

## 🔹 Uç Noktalar
- /altin → Gram altın fiyatı
- /doviz → USD, EUR, GBP fiyatları

## 🚀 Render Deploy Adımları
1. Bu klasörü GitHub’a yükle.
2. Render.com’a gir → "New + Web Service"
3. Bağlantı olarak bu repo’yu seç.
4. Environment: **Node**
5. Start Command: `npm start`
6. Deploy!

Proxy adresini aldıktan sonra HTML’de:
```js
const API_BASE = "https://senin-proxy-adresin.onrender.com";
```
şeklinde ayarla.
