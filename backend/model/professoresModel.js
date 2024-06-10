//cliente.js
const sqlite3 = require('sqlite3').verbose();
const dbPath = './infra/database.db';


// Função para abrir conexão com o banco de dados
function openDbConnection() {
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
if (err) {
console.error('Erro ao abrir o banco de dados:', err.message);
}
});
return db;
}


// Função para buscar todos os clientes
function getAllProfessores(callback) {
const db = openDbConnection();
db.all("SELECT * FROM professor", [], (err, rows) => {
db.close();
callback(err, rows);
});
}

module.exports = {
    getAllProfessores
};