//clienteRoutes.js
const express = require('express');
const router = express.Router();
const visaoAlocacaoController = require('../controllers/visaoAlocacaoController');

// Rota para obter todos os clientes
router.get('/', visaoAlocacaoController.getAllVisao);


module.exports = router;