const { Pool } = require('pg');

// Connexion à la base de données PostgreSQL
const pool = new Pool({
  host: 'localhost',
  user: 'Pierre',
  password: 'Titicaca21200',
  database: 'templateSql',
});

/// Récupérer toutes les données des utilisateurs
exports.getAllUsers = (req, res) => {
  // const query = 'SELECT * FROM utilisateur';
  const query = 'SELECT * FROM users'; // Assurez-vous que "utilisateur" est le nom de la table dans PostgreSQL
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving users:', err);
      res.status(500).json({ message: 'Error retrieving users' });
      return;
    }
    res.json(results.rows);
  });
};
