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



