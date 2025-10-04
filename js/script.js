const contadorBtn = document.getElementById("contador");
const contagem = document.getElementById("contagem");
const subtrairBtn = document.getElementById("subtrair");
const zerarBtn = document.getElementById("zerar");

let contador = Number(localStorage.getItem("contagem")) || 0;

atualizarContagem();

contadorBtn.addEventListener("click", () => atualizarContagem(++contador));

subtrairBtn.addEventListener("click", () =>
  atualizarContagem(Math.max(0, --contador))
);

zerarBtn.addEventListener("click", () => atualizarContagem(0));

function atualizarContagem(valor = contador) {
  contador = valor;
  contagem.textContent = contador;
  localStorage.setItem("contagem", contador);
}
