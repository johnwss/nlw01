/*

const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
fetch(urlParaFetch).then(function funcaoresolvedora(dadosAlocadosAqui){
    return dadosAlocadosAqui.json() }).then(function funcaoTudoResolvido(dadosProntos){
        console.log(dadosProntos)
    }) */

function populandoAUF(){
    
    const ufSelect = document.querySelector("select[name=uf]")
    const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    fetch(urlParaFetch).
        then(dadosAlocadosAqui => dadosAlocadosAqui.json())
        .then(estadosBrRecebidos => {

        //document.querySelector("select[name=uf]").innerHTML, ou ...(abaixo)
        //ufSelect.innerHTML = ufSelect.innerHTML + `<option value = "1">Valor</option>`

        //for(const i of estadosBrRecebidos){

        for(constqlq of estadosBrRecebidos){
            ufSelect.innerHTML +=  `<option value = "${constqlq.id}">${constqlq.nome}</option>`
        } 
        })

        
}

populandoAUF()

    

document
.querySelector("select[name=uf]").addEventListener("change", ()=> {console.log("showw") })


