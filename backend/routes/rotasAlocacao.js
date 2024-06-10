//clienteRoutes.js
const express = require('express');
const router = express.Router();
const alocacoesController = require('../controllers/alocacoesController');

// lembrando que a rota raiz tem clientes, definido no app.js


// Rota para obter todos os clientes
router.get('/', alocacoesController.getAllAlocacoes);


module.exports = router;