/*

const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
fetch(urlParaFetch).then(function funcaoresolvedora(dadosAlocadosAqui){
    return dadosAlocadosAqui.json() }).then(function funcaoTudoResolvido(dadosProntos){
        console.log(dadosProntos)
    }) */

function popularAsUF(){
    const ufSelect = document.querySelector("select[name=uf]")
    const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
    fetch(urlParaFetch).then(dadosAlocadosAqui => 
        dadosAlocadosAqui.json()
    ).then()
}

    

document
.querySelector("select[name=uf]").addEventListener("change", ()=> {console.log("showw") })


