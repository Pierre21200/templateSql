const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users'); // Chemin vers le contrôleur
const logcontroller = require('../controllers/login');

// Route pour récupérer toutes les données des utilisateurs
router.get('/users', usersControllers.getAllUsers);

router.post('/login', logcontroller.login);

module.exports = router;
