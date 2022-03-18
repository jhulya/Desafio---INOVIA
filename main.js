'use strict'
//#region Assinaturas das funções de modal

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}
/*
const openModal2 = () => document.getElementById('modal2')
    .classList.add('active2')
const closeModal2 = () => document.getElementById('modal2')
    .classList.remove('active2')

const openModal3 = () => document.getElementById('modal3')
    .classList.add('active3')
const closeModal3 = () => document.getElementById('modal3')
    .classList.remove('active3')

const openModal4 = () => document.getElementById('modal4')
    .classList.add('active4')
const closeModal4 = () => document.getElementById('modal4')
    .classList.remove('active4')

const openModal5 = () => document.getElementById('modal5')
    .classList.add('active5')
const closeModal5 = () => document.getElementById('modal5')
    .classList.remove('active5')*/

//#endregion Assinaturas das funções modal



// const tempClient = {
//     Data: "02/03/2022",
//     Empresa: "dois Irmãos",
//     Cliente: "Bruno Santos",
//     Endereço: "Rua tal, n, bairro tal, cidade tal",
//     Serviço: "tal",
//     Tempserviço: "360"
// }

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => locaStorage.setItem("db_client", JSON.stringify(dbClient))

//*************CRUD****************

//#region CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}
//#endregion DELETE

//#region CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
//#endregion UPDATE

//#region CRUD - READ
const readClient =() => getLocalStorage()

fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})

//#endregion READ

//#region CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}
//#endregion CREATE


const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}


//#region INTERAÇÃO COM O LAYOUT
const clearFields = () => {
    const fields = document.querySelectorAll('.area-modal')
    fields.forEach(field => field.value = "")
}

const saveClient = () => {
   if (isValidFields()) {
        const client = {
           data: document.getElementById('data').value,
           empresa: document.getElementById('empresa').value,
           cliente: document.getElementById('cliente').value,
           endereco: document.getElementById('endereco').value,
           servico: document.getElementById('servico').value,
           tempo: document.getElementById('tempo').value
        }
        createClient(client)
        updateTable()
        closeModal()
   }
}

const creatRow = (client) =>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td class="atribuida">Atribuída</td>
        <td>${client.data}</td>
        <td>06/03/2022</td>
        <td>${client.empresa}</td>
        <td>${client.nome}</td>
        <td class="media">Média</td>
        <td>
            <button type= "button" class="button editar">
                <span class="material-icons">
                    edit
                </span>
            </button>
            <button type= "button" class="button excluir">
                <span class="material-icons">
                    delete
                </span>
            </button>
        </td>
    `
    document.querySelector('tableClient>tbody').appendChild(newRow)
}

const clearTable = () =>{
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(rows => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

updateTable()

//#region Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)
document.getElementById('modalClose')
    .addEventListener('click', closeModal)
/*
document.getElementById('adicionarEmpresa')
    .addEventListener('click',openModal2 )
document.getElementById('modalClose2')
    .addEventListener('click', closeModal2)

document.getElementById('adicionarCliente')
    .addEventListener('click', openModal3)
document.getElementById('modalClose3')
    .addEventListener('click', closeModal3)

document.getElementById('adicionarEndereco')
    .addEventListener('click', openModal4)
document.getElementById('modalClose4')
    .addEventListener('click', closeModal4)

document.getElementById('adicionarServico')
    .addEventListener('click', openModal5)
document.getElementById('modalClose5')
    .addEventListener('click', closeModal5)*/

document .getElementById('salvar')
    .addEventListener('click', saveClient)    
//#endregion Eventos


