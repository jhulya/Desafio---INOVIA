'use strict'
//#region Assinaturas das funções de modal

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

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
    .classList.remove('active5')

//#endregion

/*
const tempClient = {
    Data: "02/03/2022",
    Empresa: "dois Irmãos",
    Cliente: "Bruno Santos",
    Endereço: "Rua tal, n, bairro tal, cidade tal",
    Serviço: "tal",
    Tempserviço: "360"
}

//CRUD
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client')) ?? []
    db_client.push (client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}*/


//#region Eventos
document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)
document.getElementById('modalClose')
        .addEventListener('click', closeModal)

        //
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
        .addEventListener('click', closeModal5)
//#endregion