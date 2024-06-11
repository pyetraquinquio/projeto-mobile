const Sala = require('../model/salasModel');


// Controlador para obter todos os Produtos
exports.getAllSalas = (req, res) => {
Sala.getAllSalas((err, sala) => {
if (err) {
res.status(500).send(err);
console.log("teste0")
} else {
console.log("teste1")
res.json(sala);
}
});
};
