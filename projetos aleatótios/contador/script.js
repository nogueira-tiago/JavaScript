// set inital value to zero
let conta = 0;
// select value and buttons
const resultado = document.querySelector("#resultado");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("diminuir")) {
      conta--;
    } else if (styles.contains("adicionar")) {
      conta++;
    } else {
      conta = 0;
    }

    if (conta > 0) {
      resultado.style.color = "green";
    }
    if (conta < 0) {
      resultado.style.color = "red";
    }
    if (conta === 0) {
      resultado.style.color = "#222";
    }
    resultado.textContent = conta;
  });
});