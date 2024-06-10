//clienteRoutes.js
const express = require('express');
const router = express.Router();
const salasController = require('../controller/salasController');

// lembrando que a rota raiz tem clientes, definido no app.js


// Rota para obter todos os clientes
router.get('/', salasController.getAllSalas);


module.exports = router;