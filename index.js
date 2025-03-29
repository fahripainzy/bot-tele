import express from "express";
import fetch from 'node-fetch'; // Untuk Node.js versi lama
// atau langsung gunakan fetch tanpa import untuk Node.js terbaru
import "./innocent.js";  // Jalankan innocent.js

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bot sedang berjalan...");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
