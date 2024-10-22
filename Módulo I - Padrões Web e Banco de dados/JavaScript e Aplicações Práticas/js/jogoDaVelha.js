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
      switch (tabuleiro[l][c]) {
        case -1:
          marcador = "<span style='color: red; font-size: 40px;'>X</span>";
          break;
        case 1:
          marcador = "<span style='color: blue; font-size: 40px;'>O</span>";
          break;
        default:
          marcador = `<span style="color: lightgray">${c + 1}, ${l + 1}</span>`;
      }

      tabela += `<td>${marcador}</td>`;
    }

    tabela += "<tr>";
  }

  tabela += "</table>";

  board.innerHTML = tabela;
}

function jogar() {
  linha = document.getElementById("linha").value - 1;
  coluna = document.getElementById("coluna").value - 1;

  if (tabuleiro[linha][coluna] == 0) {
    if (jogador % 2 != 0) {
      tabuleiro[linha][coluna] = -1;
    } else {
      tabuleiro[linha][coluna] = 1;
    }

    aviso.innerHTML = `Vez do jogador: ${numeroJogador()}`;

    jogador++;

    document.getElementById("linha").value = null; // limpar input
    document.getElementById("coluna").value = null; // limpar input

    console.table(tabuleiro);
  } else {
    alert("Esse campo já foi marcado!");
  }

  exibir();
}

function numeroJogador() {
  return (jogador % 2) + 1;
}

function checar() {}
