const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Jalankan innocent.js saat server dimulai
exec('node innocent.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error menjalankan innocent.js: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`innocent.js Output: ${stdout}`);
});

// Endpoint untuk web service (agar tetap hidup di Render/UptimeRobot)
app.get('/', (req, res) => {
    res.send('Bot WhatsApp Aktif!');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
