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

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  } // montar tabuleiro

  console.table(tabuleiro);
}

function exibir() {}

function jogar() {}

function checar() {}
