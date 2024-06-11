//clienteController.js
const Visao = require('../model/visaoAlocacoesModel');


// Controlador para obter todos os Produtos
exports.getAllVisao = (req, res) => {
    Visao.getAllVisao((err, visao_aloc) => {
    if (err) {
    res.status(500).send(err);
    console.log("teste0")
    } else {
    console.log("teste1")
    res.json(visao_aloc);
    }
    });
    };


