const expresso = require("express")
const { Server } = require("http")
const servidor = expresso()

servidor.get("/", (req,res) => {
res.send("vamos nessa!!")
})
servidor.listen(3000)
