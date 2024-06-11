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




