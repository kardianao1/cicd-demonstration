// Import library Express.js
const express = require('express');

// Buat aplikasi Express
const app = express();

// Definisikan route untuk root endpoint
app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi Node.js sederhana!');
});

// Tentukan port untuk server
const port = process.env.PORT || 3000;

// Jalankan server dan dengarkan permintaan di port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
