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



// function getVisaoById(id, callback) {
//     const db = openDbConnection();
//     db.get("SELECT * FROM visao_aloc WHERE prof_id = ?", [id], (err, row) => {
//         db.close();
//     callback(err, row);
//     });
//     }

// Função para buscar todos os clientes
function getAllVisao(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM visao_aloc", [], (err, rows) => {
    db.close();
    console.log("teste3")
    callback(err, rows);
    });
    }

module.exports = {
getAllVisao
};