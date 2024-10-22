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
  checar();
}

function numeroJogador() {
  return (jogador % 2) + 1;
}

function checar() {
  // Linhas
  for (let l = 0; l < 3; l++) {
    let soma = 0;
    soma = tabuleiro[l][0] + tabuleiro[l][1] + tabuleiro[l][2];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML = `<span style="color: green; font-size: 30px">O jogador ${numeroJogador()} ganhou!</span>`;
    }
  }

  // Colunas
  for (let c = 0; c < 3; c++) {
    let soma = 0;
    soma = tabuleiro[0][c] + tabuleiro[1][c] + tabuleiro[2][c];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML = `<span style="color: green; font-size: 30px">O jogador ${numeroJogador()} ganhou!</span>`;
    }
  }

  // Diagonis
  let soma1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  let soma2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];

  if (soma1 == 3 || soma1 == -3 || soma2 == 3 || soma2 == -3) {
    aviso.innerHTML = `<span style="color: green; font-size: 30px">O jogador ${numeroJogador()} ganhou!</span>`;
  }
}
