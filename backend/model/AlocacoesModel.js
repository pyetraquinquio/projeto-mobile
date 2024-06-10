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
function getAllAlocacoes(callback) {
const db = openDbConnection();
db.all("SELECT * FROM Alocacoes", [], (err, rows) => {
db.close();
callback(err, rows);
});
}


// Função para buscar um cliente por ID
function getAlocacaoById(id, callback) {
const db = openDbConnection();
db.get("SELECT * FROM Alocacoes WHERE id = ?", [id], (err, row) => {
db.close();
callback(err, row);
});
}



module.exports = {
getAllAlocacoes,
getAlocacaoById,

};