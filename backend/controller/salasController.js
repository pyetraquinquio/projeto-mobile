const Sala = require('../model/salasModel');


// Controlador para obter todos os SalasgetAllSalas
exports.getAllSalas = (req, res) => {
Sala.getAllSalas((err, salas) => {
if (err) {
res.status(500).send(err);
} else {
res.json(salas);
}
});
};