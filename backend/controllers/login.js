const { Pool } = require('pg');
const User = require('../models/user'); // Assure-toi que le chemin vers ton modèle User est correct

// Connexion à la base de données PostgreSQL
const pool = new Pool({
  host: 'localhost',
  user: 'Pierre',
  password: 'Titicaca21200',
  database: 'templateSql',
  logging: true,
});

// Route pour la connexion (login)
exports.login = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const query = 'SELECT * FROM "users" WHERE mail = $1';
    const values = [mail];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    const user = result.rows[0];
    console.log(user);
    if (user.password === password) {
      res.status(200).json({ message: 'Connexion réussie' });
    } else {
      res.status(401).json({ message: 'Échec de la connexion' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
