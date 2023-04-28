const formulario = document.querySelector(".gricery-form");
const alerta = document.querySelector(".alert");
const produto = document.getElementById("grocery");
const adicionarBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-conteiner");
const lista = document.querySelector(".grocery-list");
const btnApagar = document.querySelector(".clear-btn");

let editarElemento;
let editarFlag = false;
let editarID = '';

formulario.addEventListener("submit",adicionarItem);
btnApagar.addEventListener("click",apagarItens);
window.addEventListener("DOMContentLoaded",setupItens);

function adicionarItem(elemento){
    elemento.preventDefault;
    const valor = produto.value;
    const id = new Date().getTime().toString();

}