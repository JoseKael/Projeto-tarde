
const pares = ['HTML', 'HTML', 'CSS', 'CSS', 'VAR', 'VAR', 'FUN', 'FUN'];
let cartas = [...pares].sort(() => 0.5 - Math.random());
let jogo = document.getElementById('jogoMemoria');
let selecionadas = [];
let bloqueado = false;

function criarCartas() {
  cartas.forEach((texto, i) => {
    let card = document.createElement('div');
    card.className = 'card';
    card.dataset.valor = texto;
    card.onclick = () => selecionar(card);
    card.innerText = '?';
    jogo.appendChild(card);
  });
}

function selecionar(card) {
  if (bloqueado || card.innerText !== '?') return;
  card.innerText = card.dataset.valor;
  selecionadas.push(card);
  if (selecionadas.length === 2) {
    bloqueado = true;
    setTimeout(() => {
      if (selecionadas[0].dataset.valor !== selecionadas[1].dataset.valor) {
        selecionadas[0].innerText = '?';
        selecionadas[1].innerText = '?';
      }
      selecionadas = [];
      bloqueado = false;
    }, 800);
  }
}

criarCartas();
