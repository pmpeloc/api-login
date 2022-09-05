require('dotenv').config();
const express = require('express');
const app = express();

// Settings
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes'));

// Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
