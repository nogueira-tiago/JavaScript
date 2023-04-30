const formulario = document.querySelector(".grocery-form");
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

    if(valor && !editarFlag){
        const element = document.createElement("article");
        element.classList.add("grocery-item");
        const atributo = document.createAttribute("data-id");
        atributo.value = id;
        element.setAttributeNode(atributo);
        element.innerHTML = `<p class="title">${valor}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
            </div>`;
        lista.appendChild(element);
        mostrarAlerta("item adicionado a lista","success")
        container.classList.add("show-element");
    }else if(valor && editarFlag){

    }else{
        mostrarAlerta("por favor adicione um valor","danger")
    }
}

//mostrar alerta
function mostrarAlerta(texto,ação){
    alerta.textContent = texto;
    alerta.classList.add(`alert-${ação}`);
    
    //remover alerta
    setTimeout(function(){
    alerta.textContent = '';
    alerta.classList.remove(`alert-${ação}`)},1500);
}


