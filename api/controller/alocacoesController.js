const Produto = require('../model/AlocacoesModel');


// Controlador para obter todos os Produtos
exports.getAllAlocacao = (req, res) => {
Produto.getAllAlocacao((err, alocacoes) => {
if (err) {
res.status(500).send(err);
} else {
res.json(alocacoes);
}
});
};


// Controlador para obter um Produto pelo ID
exports.getAlocacaoById = (req, res) => {
Produto.getAlocacaoById(req.params.id, (err, alocacoes) => {
if (err) {
res.status(500).send(err);
} else if (alocacoes) {
res.json(alocacoes);
} else {
res.status(404).send({ message: 'Alocação não encontrado' });
}
});
};




