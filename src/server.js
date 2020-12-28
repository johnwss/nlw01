const meuExpresso = require("express")
const meuServidor = meuExpresso()

const bancoDeDados = require("./database/db")




const nunjucks = require("nunjucks")

meuServidor.listen("3000")

meuServidor.use(meuExpresso.static("public"))


nunjucks.configure("src/views",{
    express: meuServidor,
    noCache: true
})


meuServidor.get("/", (req,res) => {
    res.render( "index.html", {title: "Seu marketplace de coleta de resíduos"})
})

meuServidor.get("/create-point", (req,res) => {
    res.render( "create-point.html")
})

meuServidor.get("/search", (req,res) => {

    //coletando do banco de dados

    bancoDeDados.all(`SELECT * FROM localidades`, function(err, rows){

                if(err){
                    return console.log(err)
                }

                const total = rows.length
        
                    console.log("Estes são seus registros")
                    console.log(rows)

                    res.render(  "search-results.html", {localidades: rows, total: total})
                //ou simplesmente ", total"
            })
        






    
})







