const menu = [{
    id:1,
    titulo:"panqueca de manteiga e leite",
    categoria:"café",
    preço: 10,
    img:"./imagens/item-1.jpeg",
    descrição:`I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
},{
    id:2,
    titulo:"X-TUDO",
    categoria:"almoço",
    preço:8,
    img:"./imagens/item-2.jpeg",
    descrição:`vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
},{
    id:3,
    titulo:"godzilla milkshake",
    categoria:"shakes",
    preço:5,
    img:"./imagens/item-3.jpeg",
    descrição:`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`, 
},{
    id:4,
    titulo:"country delight",
    categoria:"café",
    preço:15,
    img:"./imagens/item-4.jpeg",
    descrição:`Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
},{
    id:5,
    titulo:"X-EGG",
    categoria:"almoço",
    preço:22,
    img:"./imagens/item-5.jpeg",
    descrição:`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
},{
    id:6,
    titulo:"sonho oreo",
    categoria:"shakes",
    preço:15,
    img:"./imagens/item-6.jpeg",
    descrição:`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
},{
    id:7,
    titulo:"X-BACON",
    categoria:"almoço",
    preço:11,
    img:"./imagens/item-7.jpeg",
    descrição:`carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
},{
    id:8,
    titulo:"X-BURGER",
    categoria:"almoço",
    preço:13,
    img:"./imagens/item-8.jpeg",
    descrição:`on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
},{
    id:9,
    titulo:"parceiro quarentena",
    categoria:"shakes",
    preço:16,
    img:"./imagens/item-9.jpeg",
    descrição:`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
},{
    id:10,
    titulo:"carne de bufalo",
    categoria:"jantar",
    preço:30,
    img:"./imagens/item-10.jpeg",
    descrição:`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
}]

const centro = document.querySelector(".centro-seção");
const btns = document.querySelectorAll(".btn-filtro");

window.addEventListener("DOMContentLoaded", function(){
    mostrarItensMenu(menu);
    const categorias = menu.reduce(function (valores,item){
        if(!valores.includes(item.categoria)){
            valores.push(item.categoria);
        }return valores;
    })
})

btns.forEach(function(btn){
    btn.addEventListener("click",function(elemento){
        const categoria = elemento.currentTarget.dataset.id;
        const categoriaMenu = menu.filter(function(itensMenu){
            if(itensMenu.categoria === categoria){
                return itensMenu
            }
        });
        if(categoria==="tudo"){
            mostrarItensMenu(menu)
        }else{
            mostrarItensMenu(categoriaMenu)
        }
    })
})

function mostrarItensMenu(itensMenu){
    let mostrarMenu = itensMenu.map;(function(item){
        return `<article class="item-menu">
        <img src=${item.img} alt=${item.titulo} class="foto">
        <div class="informação-item">
            <header>
                <h4>${item.titulo}</h4>
                <h4 class="preço">R$ ${item.preço}</h4>
            </header>
            <p class="texto-item">${item.descrição}</p>
        </div>
    </article>`
    });
    mostrarMenu = mostrarMenu.join("")
    centro.innerHTML = mostrar
}
