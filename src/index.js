require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

// Settings
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes'));

// Server
app.listen(PORT, async () => {
  // WARNING: Solo activar el force true cuando se crean nuevos modelos.
  await sequelize.sync({ force: true });
  sequelize.authenticate().then(() => {
    console.log('Database is connect successfully');
  });
  console.log(`Server listening on port: ${PORT}`);
});
