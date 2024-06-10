const visao = require('../model/VisaoAlocacoesModel');


// Controlador para obter um visao pelo ID
exports.getVisaoById = (req, res) => {
visao.getVisaoById(req.params.id, (err, visao) => {
if (err) {
res.status(500).send(err);
} else if (visao) {
res.json(visao_aloc);
} else {
res.status(404).send({ message: 'visao não encontrado' });
}
});
};