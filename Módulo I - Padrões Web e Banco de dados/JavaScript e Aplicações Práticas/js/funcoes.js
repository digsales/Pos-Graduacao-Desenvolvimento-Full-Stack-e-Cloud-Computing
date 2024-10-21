function calcular(operacao) {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;

  let resultado;

  switch (operacao) {
    case "+":
      resultado = somar(n1, n2);
      break;
    case "-":
      resultado = subtrair(n1, n2);
      break;
    case "*":
      resultado = multiplicar(n1, n2);
      break;
    case "/":
      resultado = dividir(n1, n2);
      break;
  }

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function somar(n1, n2) {
  return Number(n1) + Number(n2);
}
function subtrair(n1, n2) {
  return Number(n1) - Number(n2);
}
function multiplicar(n1, n2) {
  return Number(n1) * Number(n2);
}
function dividir(n1, n2) {
  if (n2 == 0) {
    console.error("ERROR! Não é possível dividir número por 0.");
    return "ERROR!";
  } else {
    return Number(n1) / Number(n2);
  }
}

// outra maneira de declarar funções

const exemplo1 = function (n1, n2) {
  return n1 + n2;
};

const exemplo2 = (n1, n2) => {
  return n1 + n2;
}; // arrow function

const exemplo3 = (n1, n2) => n1 + n2; // arrow function de uma linha
