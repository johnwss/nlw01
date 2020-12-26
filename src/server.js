const meuExpresso = require("express")
const meuServidor = meuExpresso()
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
    res.render(  "search-results.html")
})







