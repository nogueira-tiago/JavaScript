const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  const img = document.getElementById("img-pessoa");
  const autor = document.getElementById("autor");
  const ocupação = document.getElementById("ocupação");
  const informação = document.getElementById("informação")

  const anterior = document.querySelector(".anterior");
  const proximo = document.querySelector(".proximo");
  const aleatorio = document.querySelector(".aleatorio");

  let itemAtual = 0;

  window.addEventListener("DOMContentLoaded",function(){
    mostrarPessoa(itemAtual)
  })

  const mostrarPessoa = (pessoa)=>{
    const item = reviews[pessoa]
    img.src = item.img
    informação.textContent = item.text
    ocupação.textContent = item.job
    autor.textContent = item.name
  }

  proximo.addEventListener("click",function(){
    itemAtual++
    if(itemAtual > reviews.length-1){
        itemAtual =0
    }
    mostrarPessoa(itemAtual)
  })

  anterior.addEventListener("click",function(){
    itemAtual--
    if(itemAtual < 0){
        itemAtual = 3
    }
    mostrarPessoa(itemAtual)
  })

  aleatorio.addEventListener("click",function(){
    let resultado = Math.floor(Math.random()*reviews.length);
    mostrarPessoa(resultado) 
  })