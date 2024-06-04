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
function getAllClientes(callback) {
const db = openDbConnection();
db.all("SELECT * FROM Clientes", [], (err, rows) => {
db.close();
callback(err, rows);
});
}


// Função para buscar um cliente por ID
function getClienteById(id, callback) {
const db = openDbConnection();
db.get("SELECT * FROM Clientes WHERE id = ?", [id], (err, row) => {
db.close();
callback(err, row);
});
}


// Função para criar um novo cliente
function createCliente(cliente, callback) {
const { nome, email, idade, telefone } = cliente;
const db = openDbConnection();
db.run("INSERT INTO Clientes (nome, email, idade, telefone) VALUES (?, ?, ?, ?)", [nome,
email, idade, telefone], function (err) {
db.close();
callback(err, { id: this.lastID });
});
}


// Função para atualizar um cliente existente
function updateCliente(id, cliente, callback) {
const { nome, email, idade, telefone } = cliente;
const db = openDbConnection();
db.run("UPDATE Clientes SET nome = ?, email = ?, idade = ?, telefone = ? WHERE id = ?",
[nome, email, idade, telefone, id], function (err) {
db.close();
callback(err, { changes: this.changes });
});
}
// Função para deletar um cliente
function deleteCliente(id, callback) {
const db = openDbConnection();
db.run("DELETE FROM Clientes WHERE id = ?", [id], function (err) {
db.close();
callback(err, { changes: this.changes });
});
}
module.exports = {
getAllClientes,
getClienteById,
createCliente,
updateCliente,
deleteCliente
};