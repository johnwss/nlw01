//importando a dependencia
const omeusql = require("sqlite3").verbose()


//criar o objeto que operara no bd
const bancoDeDados = new omeusql.Database("./src/database/database.db")

bancoDeDados.serialize(() => {
    //criando uma tabela
    bancoDeDados.run(`
    CREATE TABLE IF NOT EXISTS localidades (
        id  INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
    `)

})