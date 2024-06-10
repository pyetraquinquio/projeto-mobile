//clienteRoutes.js
const express = require('express');
const router = express.Router();
const visaoAlocacaoController = require('../controller/visaoAlocacaoController');

// lembrando que a rota raiz tem clientes, definido no app.js


// Rota para obter todos os clientes
router.get('/', visaoAlocacaoController.getAllVisao);


module.exports = router;