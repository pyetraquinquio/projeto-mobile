const Produto = require('../model/professoresModel');


// Controlador para obter todos os Produtos
exports.getAllProdutos = (req, res) => {
Produto.getAllProdutos((err, produtos) => {
if (err) {
res.status(500).send(err);
} else {
res.json(produtos);
}
});
};


// Controlador para obter um Produto pelo ID
exports.getProdutoById = (req, res) => {
Produto.getProdutoById(req.params.id, (err, produto) => {
if (err) {
res.status(500).send(err);
} else if (produto) {
res.json(produto);
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}
});
};


