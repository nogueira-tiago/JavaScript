const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const diasSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado',
  ];

  const sorteio = document.querySelector(".giveaway");
  const fim = document.querySelector(".deadline");
  const itens = document.querySelectorAll(".deadline-format h4");

   let tempData = new Date();
   let tempAno = tempData.getFullYear();
   let tempMes = tempData.getMonth();
   let tempDia = tempData.getDate();
   let dataFutura = new Date(tempAno,tempMes,tempDia + 10,11,30,0);


   const ano = dataFutura.getFullYear();
   const hora = dataFutura.getHours();
   const minutos = dataFutura.getMinutes();

   let mes = dataFutura.getMonth();
   mes = meses[mes];
   const dia = diasSemana[dataFutura.getDay()];
   const data = dataFutura.getDate();
   sorteio.textContent = `giveaway ends on ${dia}, ${data} ${mes} ${ano} ${hora}:${minutos}`;

   const tempoFuturo = dataFutura.getTime();
   function tempoRestante(){
    const hoje = new Date().getTime();
    const tempo = tempoFuturo - hoje
    //tempos
    const umDia = 24*60*60*1000;
    const umaHora = 60*60*1000;
    const umMinuto = 60*1000;
    //calculando os valores
    let dias = Math.floor(tempo/umDia);
    let horas = Math.floor(tempo%umDia/umaHora);
    let minutos = Math.floor(tempo%umaHora/umMinuto);
    let segundos = Math.floor(tempo%umMinuto/1000);

    //array dos valores
    const valores = [dias,horas,minutos,segundos];
    function forma(item){
      if(item<10){
        return(item = `0${item}`);
      }return item;
    };

    itens.forEach((item,index)=>{
      item.innerHTML=forma(valores[index])
    });

    if(tempo<0){
      clearInterval(regreção);
      fim.innerHTML=`
      <h4 class = "expired">desculpe,esse sorteio já acabou.</h4>`
    }
   }
   let regreção = setInterval(tempoRestante,1000)
   tempoRestante()

