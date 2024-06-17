// app.js
const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")


// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());
app.use(cors())

// Importando as rotas do cliente
const alocacaoRoutes = require('./routes/rotasAlocacao');
const professoresRoutes = require('./routes/rotasProfessor');
const salasRoutes = require('./routes/rotasSala');
const visaoRoutes = require('./routes/rotasVisaoaloc');



// Usando as rotas do cliente com o prefixo '/clientes'
app.use('/alocacao', alocacaoRoutes);
app.use('/professores', professoresRoutes);
app.use('/salas', salasRoutes);
app.use('/visao', visaoRoutes);


// Iniciando o servidor na porta especificada
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});