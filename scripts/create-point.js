/*

const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
fetch(urlParaFetch).then(function funcaoresolvedora(dadosAlocadosAqui){
    return dadosAlocadosAqui.json() }).then(function funcaoTudoResolvido(dadosProntos){
        console.log(dadosProntos)
    }) */ 

function populandoComUF(){
    
    const ufSelect = document.querySelector("select[name=uf]")
    //const ufSelect = document.querySelector("select[name=uf]").innerHTML
    const urlParaFetch = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    fetch(urlParaFetch).
        then(dadosAlocadosAqui => dadosAlocadosAqui.json())
        .then(estadosBrRecebidos => {

        //document.querySelector("select[name=uf]").innerHTML, ou ...(abaixo)
        //ufSelect.innerHTML = ufSelect.innerHTML + `<option value = "1">Valor</option>`

        //for(const i of estadosBrRecebidos){
            
        //for(cadaEstado of estadosBrRecebidos){
        //do json -> cadaEstado.id e cadaEstado.nome   
        for(constqlq of estadosBrRecebidos){
            // ufSelect.innerHTML = ufSelect.innerHTML +  `<option value = "${constqlq.id}">${constqlq.nome}</option>`
            ufSelect.innerHTML +=  `<option value = "${constqlq.id}">${constqlq.nome}</option>`
        } 
        })

        
}

populandoComUF()

    

//document
//.querySelector("select[name=uf]").addEventListener("change", ()=> {console.log("mudado") })




function buscarCidades(emTornoDeMim){
    const SelectNoHtmlParaCidades = document.querySelector("select[name=city]")
    const estadoInput = document.querySelector("input[name=state]")
    


    const indexDoEstadoSelecionado = emTornoDeMim.target.selectedIndex
    estadoInput.value = emTornoDeMim.target.options[indexDoEstadoSelecionado].text
   
   
   // console.log(event.target.value)
     const urlFetchCidade = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${emTornoDeMim.target.value}/municipios`
    fetch(urlFetchCidade).then(function(alocandoDados){return alocandoDados.json()}).then(function(cidades){
        for(cidade of cidades){
            SelectNoHtmlParaCidades.innerHTML += `<option value = "${cidade.id}">${cidade.nome}</option>`
        }

        SelectNoHtmlParaCidades.disabled = false
        //document.querySelector("select[name=city]").disabled = false
    })
}

//document
//.querySelector("select[name=uf]").addEventListener("change", function mudou(mudado)
//     {console.log("showw") })


document
.querySelector("select[name=uf]").addEventListener("change", buscarCidades)