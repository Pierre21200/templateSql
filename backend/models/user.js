const { Pool } = require('pg');

// Connexion à la base de données PostgreSQL
const pool = new Pool({
  host: 'localhost',
  user: 'Pierre',
  password: 'Titicaca21200',
  database: 'templateSql',
  logging: true,
});

// Modèle User
class User {
  static async findOneByEmail(email) {
    try {
      const query = 'SELECT * FROM "users" WHERE mail = $1';
      const values = [email];
      const result = await pool.query(query, values);

      if (result.rowCount === 0) {
        return null;
      }

      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = User;
