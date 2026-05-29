const elementoLampada = document.getElementById('lampada-visual');
const elementoBotao = document.getElementById('btn-acao');

const urlApagada = "img/lampada-apagada.png";
const urlAcesa = "img/lampada-acesa.png";

let sistemaLigado = false;

elementoBotao.addEventListener('click', () => {
  if (!sistemaLigado) {
    elementoLampada.src = urlAcesa;
    elementoLampada.alt = "Lâmpada Acesa";

    elementoBotao.textContent = "Desligar Lâmpada";
    elementoBotao.style.backgroundColor = "#dc3545";

    sistemaLigado = true;
  } else {
    elementoLampada.src = urlApagada;
    elementoLampada.alt = "Lâmpada Apagada";

    elementoBotao.textContent = "Ligar Lâmpada";
    elementoBotao.style.backgroundColor = "#28a745";

    sistemaLigado = false;
  }
});