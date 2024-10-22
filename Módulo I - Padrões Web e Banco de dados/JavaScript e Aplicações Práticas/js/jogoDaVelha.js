let tabuleiro; // variável global
let board; // variável global
let aviso; // variável global
let jogador; // variável global
let linha; // variável global
let coluna; // variável global

function iniciar() {
  tabuleiro = [];
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let l = 0; l < 3; l++) {
    tabuleiro[l] = [];
    for (let c = 0; c < 3; c++) {
      tabuleiro[l][c] = 0;
    }
  } // montar tabuleiro

  console.table(tabuleiro);
  exibir();
}

function exibir() {
  let tabela = "<table border='1' cellpadding='10'>";

  for (let l = 0; l < 3; l++) {
    tabela += "<tr>";

    for (let c = 0; c < 3; c++) {
      tabela += `<td>${c + 1}, ${l + 1}</td>`;
    }

    tabela += "<tr>";
  }

  tabela += "</table>";

  board.innerHTML = tabela;
}

function jogar() {}

function checar() {}
