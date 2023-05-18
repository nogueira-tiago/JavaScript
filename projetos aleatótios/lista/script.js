const formulario = document.querySelector(".grocery-form");
const alerta = document.querySelector(".alert");
const produto = document.getElementById("grocery");
const adicionarBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const lista = document.querySelector(".grocery-list");
const apagarBtn = document.querySelector(".clear-btn");

// edit option
let editarElemento;
let editarFlag = false;
let editarID = "";

// *** event listeners ***
//adicionar no formulario
formulario.addEventListener("submit",adicionarItem);

//apagar itens
apagarBtn.addEventListener("click",apagarItens);

//carregar lista
window.addEventListener("DOMContentLoaded",setupItens)


//*** funções ***
function adicionarItem(evento){
  evento.preventDefault();
  const valor = produto.value
  const id = new Date().getTime().toString();
  if(valor && !editarFlag){
    //alerta
    mostrarAlerta("item adicionado para a lista","success");

    //mostrar lista
    container.classList.add("show-container");

    //resetar linha
    resetarLinha()

    //adicionar ao armazenamento local
    adicionarAoArmazenamentoLocal(id,valor)
  }else if(valor && editarFlag){
    editarElemento.innerHTML = valor;
    mostrarAlerta("modificado","success");
    editarArmazenamentoLocal(editarID,valor)
    resetarLinha();
  }else{
    mostrarAlerta("adicione um item","danger");
  }
}
//mostrarAlerta
function mostrarAlerta(texto,ação){
  alerta.textContent = texto;
  alerta.classList.add(`alert-${ação}`)

  //remover alerta
  setTimeout(function(){
  alerta.textContent = "";
  alerta.classList.remove(`alert-${ação}`);
  },1000)
}

//resetar linha
function resetarLinha(){
  produto.value = ''
  editarFlag = false;
  editarID = '';
  adicionarBtn.textContent = "adicionar";
}

//apagar itens
function apagarItens() {
  const itens = document.querySelectorAll(".grocery-item");

  if(itens.length > 0){
    itens.forEach(function(item){
      lista.removeChild(item)
    })
  }
  container.classList.remove("show-container");
  mostrarAlerta("lista vazia","danger");
  resetarLinha();
  localStorage.removeItem("list");
}

//deletar item
function deletarItem(evento){
  const element = evento.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  lista.removeChild(element);
  resetarLinha();
  if(lista.children.length === 0 ){
    container.classList.remove("show-container");
  }
  mostrarAlerta("item removido","danger");
  removerDoArmazenamentoLocal(id);
}

//editar item
function editarItem(evento){
  const element = evento.currentTarget.parentElement.parentElement;
  editarElemento = evento.currentTarget.parentElement.previousElementSibling;
  produto.value = editarElemento.innerHTML;
  editarFlag = true;
  editarID = element.dataset.id;
  adicionarBtn.textContent = "mudar"
}

//*** armazenamento local ***
function adicionarAoArmazenamentoLocal(id,valor){
  const produtos = {
    id:id,valor:valor
  }
  let itens = armazenamentoLocal()
  itens.push(produtos);
  localStorage.setItem("lista",JSON.stringify(itens))
}

function removerDoArmazenamentoLocal(id){
  let itens = armazenamentoLocal();
  itens = itens.filter(function(item){
    if(item.id !==id){
      return item;
    }
  })
  localStorage.setItem("list",JSON.stringify(itens));
}

function editarArmazenamentoLocal(id,valor){
  let itens = armazenamentoLocal();
  itens = itens.map(function(item){
    if(item.id === id){
      item.value = valor;
    }
    return item;
  })
  localStorage.setItem("list",JSON.stringify(itens));
}

function armazenamentoLocal(){
  return localStorage.getItem("lista")?JSON.parse(localStorage.getItem("lista")):[];
}
//*** setup itens ***
function setupItens(){
  let itens = armazenamentoLocal();
  if(itens.length > 0){
    itens.forEach(function(item){
      criarItem(item.id,item.value);
    });
    container.classList.add("show-container");
  }
}

function criarItem(id,valor){
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
  const btnDeletar = element.querySelector(".delete-btn");
  const btnEditar = element.querySelector(".edit-btn");
  btnDeletar.addEventListener("click",deletarItem)
  btnEditar.addEventListener("click",editarItem)
  lista.appendChild(element);
}
