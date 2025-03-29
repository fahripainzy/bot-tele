import express from "express"; // Pastikan import dengan benar
const app = express();

const PORT = process.env.PORT || 3000; // Gunakan port dari Render

app.get("/", (req, res) => {
  res.send("Server berjalan dengan sukses di Render!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

start("innocent.js");
