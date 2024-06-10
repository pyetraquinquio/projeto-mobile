const Alocacao = require('../model/AlocacoesModel');


// Controlador para obter todos os Produtos
exports.getAllAlocacoes = (req, res) => {
Alocacao.getAllAlocacoes((err, alocacoes) => {
if (err) {
res.status(500).send(err);
} else {
res.json(alocacoes);
}
});
};


// Controlador para obter um Produto pelo ID
exports.getAlocacaoById = (req, res) => {
Produto.getAlocacaoById(req.params.id, (err, alocacao) => {
if (err) {
res.status(500).send(err);
} else if (alocacao) {
res.json(alocacao);
} else {
res.status(404).send({ message: 'Alocação não encontrado' });
}
});
};




