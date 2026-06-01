const elementoLampada = document.getElementById('lampada-visual');
const elementoBotao = document.getElementById('btn-acao');
const elementoStatus = document.getElementById('status-sistema');

const urlApagada = "img/lampada-apagada.png";
const urlAcesa = "img/lampada-acesa.png";

let sistemaLigado = false;

elementoBotao.addEventListener('click', () => {
  sistemaLigado = !sistemaLigado;

  if (sistemaLigado) {
    elementoLampada.src = urlAcesa;
    elementoLampada.alt = "Lâmpada Acesa";

    elementoBotao.textContent = "Desligar Lâmpada";
    elementoBotao.style.backgroundColor = "#e53e3e";

    elementoStatus.textContent = "ON";
    elementoStatus.classList.remove("desligado");
    elementoStatus.classList.add("ligado");
  } else {
    elementoLampada.src = urlApagada;
    elementoLampada.alt = "Lâmpada Apagada";

    elementoBotao.textContent = "Ligar Lâmpada";
    elementoBotao.style.backgroundColor = "#48bb78";

    elementoStatus.textContent = "OFF";
    elementoStatus.classList.remove("ligado");
    elementoStatus.classList.add("desligado");
  }
});