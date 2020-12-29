const meuExpresso = require("express")
const meuServidor = meuExpresso()

const bancoDeDados = require("./database/db")




const nunjucks = require("nunjucks")

meuServidor.listen("3000")

meuServidor.use(meuExpresso.static("public"))

meuServidor.use(meuExpresso.urlencoded({extended: true}))


nunjucks.configure("src/views",{
    express: meuServidor,
    noCache: true
})


meuServidor.get("/", (req,res) => {
    res.render( "index.html", {title: "Seu marketplace de coleta de resíduos"})
})

meuServidor.get("/create-point", (req,res) => {

    // console.log(req.query)
    res.render( "create-point.html")
})

meuServidor.post("/savepoint", (req,res) => {
    console.log(req.body)


        const query = `INSERT INTO localidades (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);`


    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function aposInserirDadoChecar(err){

        if(err){
            
        console.log(err)
        return res.send("Erro no cadastro!")
        } 

            console.log("Cadastrado com sucesso,meu caro!")
            console.log(this)
            res.render( "create-point.html",{saved: true})


    }

 

    bancoDeDados.run(query,values, aposInserirDadoChecar)

})



meuServidor.get("/search", (req,res) => {

    const search = req.query.busca

    if(search == ""){
       return res.render("search-results.html", {total: 0})


    }

    //coletando do banco de dados

    bancoDeDados.all(`SELECT * FROM localidades WHERE city LIKE '%${search}%' `, function(err, rows){

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







