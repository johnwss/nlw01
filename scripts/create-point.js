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

     SelectNoHtmlParaCidades.innerHTML = `<option>Selecione a Cidade</option>`
     SelectNoHtmlParaCidades.innerHTML.disabled= true
     
     
    fetch(urlFetchCidade).then(function(alocandoDados){return alocandoDados.json()}).then(function(cidades){
        for(cidade of cidades){
            SelectNoHtmlParaCidades.innerHTML += `<option value = "${cidade.nome}">${cidade.nome}</option>`
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

const itemsParaColetar = document.querySelectorAll(".items-grid li")

for(const item of itemsParaColetar){
    item.addEventListener("click",handleSelectedItem)

}

const itemsColetados =  document.querySelector("input[name=items]")     
let listaItems = []
//imagine que dentro dessa lista já temos os seguintes itens [2,3,5]

    function handleSelectedItem(eventoaqui){
        const itemLi = eventoaqui.target

        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id

        const jaSelecionado = listaItems.findIndex(function acharItem(item){
            const itemEncontrado = item === itemId
            return itemEncontrado
        })

    //o que acontece acima é que o findIndex faz uma varredura(um "for")para cada i(no exemplo,chamado "item")e retorna em seguida o seu index,
    //a ideia de jaSelecionado é tendo sido já incluso na lista,como o exemplos imaginado acima,ele forçosamente retornara a posição,se não tiver sido "jaSelecionado",
    //ou seja,naõ existe ainda,o retorno é -1
    //caso o item de fato já esteja na lista,como o 2 do exemplo,o index de sua posição será identificado e guardado para concluir o resto do planejamento abaixo.

    //console.log(jaSelecionado)
    //console.log(jaSelecionado != -1)

    //sendo o index diferente de zero(de fato já incluído,ou seja jaSelecionado),passamos ao laço de if onde se decidira por remoção,
    // e caso menor que zero ele será haverá então inclusão na lista,atraves do else.
    if(jaSelecionado >=0){
    const filtrada = listaItems.filter(item =>{
        const itemEhDiferente = item != itemId
        return itemEhDiferente

        //o i(chamado de "item" neste exemplo)compara uma posição de index e procurar averiguar se esta posição 
        //difere de determinado valor atribuido(no caso,o valor dado no id,do html)
        //caso seja assim(true) siga para o proximo numero,até que o i("item")
        //seja identificado na ordem da lista em seu indice com o valor (ex:3 pertecente a 1,de fato)
        //verificando que 3 pertence ao indice 1,o valor será removido daquele espaço,sendo apagado da lista.
        //na pratica,clicando em 3,o "for" irá fazer uma checagem no indice zero com todos os valores da lista,
        //vendo que não encontrou o match clicado(3),passará para o indice 1,encontrando então que um está indexado com o 3,ele dá o filter(pop)removendo-o.
        //sendo true manterá e abaixo a lista pronta será chamada de filtrada


    })
listaItems = filtrada
//atualização da lista
    }

else{
    listaItems.push(itemId)
    //else,ou seja caso o item não esteja jaSelecionado(retornando -1)inclua-o agora(push)

}
 itemsColetados.value = listaItems
    }
