const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users'); // Chemin vers le contrôleur

// Route pour récupérer toutes les données des utilisateurs
router.get('/users', usersControllers.getAllUsers);

module.exports = router;
