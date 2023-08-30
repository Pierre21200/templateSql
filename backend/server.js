// const express = require('express');
// const mysql = require('mysql2');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connexion à la base de données MySQL
// const connection = mysql.createConnection({
//   host: 'localhost', // Changez ceci en l'adresse de votre serveur MySQL
//   user: 'root', // Remplacez par votre nom d'utilisateur MySQL
//   password: 'Titicaca21200-', // Remplacez par votre mot de passe MySQL
//   database: 'template', // Remplacez par le nom de votre base de données
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to database');
// });

// // Routes
// app.get('/', (req, res) => {
//   res.send('Backend is running.');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
