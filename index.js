const express = require("express");
require("./innocent.js"); // Memuat dan menjalankan file innocent.js

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bot sedang berjalan...");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
