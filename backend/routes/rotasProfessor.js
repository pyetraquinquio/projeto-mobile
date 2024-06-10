//clienteRoutes.js
const express = require('express');
const router = express.Router();
const professorController = require('../controller/professoresController');

// lembrando que a rota raiz tem clientes, definido no app.js

// Rota para obter todos os clientes
router.get('/', professorController.getAllProfessores);


module.exports = router;