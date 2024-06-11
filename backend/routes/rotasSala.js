//clienteRoutes.js
const express = require('express');
const router = express.Router();
const salaController = require('../controller/salasController');

// Rota para obter todos os clientes
router.get('/', salaController.getAllSalas);


module.exports = router;