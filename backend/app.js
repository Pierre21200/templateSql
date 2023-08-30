const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg'); // Utilisez le module 'pg' pour PostgreSQL
const routes = require('./routes/users.js'); // Importez les routes

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données PostgreSQL
const pool = new Pool({
  host: 'localhost', // Changez ceci en l'adresse de votre serveur PostgreSQL
  user: 'Pierre', // Remplacez par votre nom d'utilisateur PostgreSQL
  password: 'Titicaca21200', // Remplacez par votre mot de passe PostgreSQL
  database: 'templateSql', // Remplacez par le nom de votre base de données PostgreSQL
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
  done();
});

app.get('/users', routes, (req, res) => {
  res.json({ message: 'Backend is running.' });
});

// Lorsqu'aucune route ne correspond, renvoie une réponse 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
