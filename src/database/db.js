//importando a dependencia
const omeusql = require("sqlite3").verbose()


//criar o objeto que operara no bd
const bancoDeDados = new omeusql.Database("./src/database/database.db")

module.exports = bancoDeDados

// bancoDeDados.serialize(() => {
//     //criando uma tabela
//     bancoDeDados.run(`
//     CREATE TABLE IF NOT EXISTS localidades (
//         id  INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
//     `)
//         //inserindo dados na tabela


//     const query = `INSERT INTO localidades (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);`


//     const values = [
//     "https://www.ashevillenc.gov/wp-content/uploads/2020/07/Recycle-right-illustration-768x614.jpg",
//     "Zueiros da Reciclagem",
//     "Rua Descansante",
//     "Número 777",
//     "Espírito Santo",
//     "Vitória",
//     "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function aposInserirDadoChecar(err){

//         if(err){
//             return console.log(err)
//         }

//             console.log("Cadastrado com sucesso,meu caro!")
//             console.log(this)



//     }

 

//     bancoDeDados.run(query,values, aposInserirDadoChecar)

//     // bancoDeDados.run(`DELETE FROM localidades WHERE id = ?`,[1], function(err){
//     //     if(err){
//     //         console.log(err)
//     //     }

//     //     console.log("registro apagado")
      
//     // })

//     bancoDeDados.all(`SELECT state,city FROM localidades`, function(err, rows){

//         if(err){
//             return console.log(err)
//         }

//             console.log("Estes são seus registros")
//             console.log(rows)
//     })





// })