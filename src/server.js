const meuExpresso = require("express")
const meuServidor = meuExpresso()

meuServidor.use(meuExpresso.static("public"))

meuServidor.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

meuServidor.get("/create-point", (req,res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

meuServidor.get("/search-results", (req,res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})


meuServidor.listen("3000")







