const visao = require('../model/VisaoAlocacoesModel');


// Controlador para obter todos os VisaoAlocacao
exports.getAllVisao = (req, res) => {
visao.getAllVisao((err, visao_aloc) => {
if (err) {
res.status(500).send(err);
} else if (visao) {
res.json(visao_aloc);
} else {
res.json(visao_aloc);
}
});
};