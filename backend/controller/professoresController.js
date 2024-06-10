const Professor = require('../model/professoresModel');


// Controlador para obter todos os Produtos
exports.getAllProfessores = (req, res) => {
Professor.getAllProfessores((err, professores) => {
if (err) {
res.status(500).send(err);
} else {
res.json(professores);
}
});
};


// Controlador para obter um Produto pelo ID
exports.getProfessorById = (req, res) => {
Produto.getProfessorById(req.params.id, (err, professor) => {
if (err) {
res.status(500).send(err);
} else if (professor) {
res.json(professor);
} else {
res.status(404).send({ message: 'Professor não encontrado' });
}
});
};


