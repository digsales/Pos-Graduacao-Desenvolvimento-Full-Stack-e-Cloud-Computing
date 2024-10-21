function somar() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  const soma = n1 + n2;

  document.getElementById("resultado").innerHTML = `Resultado: ${soma}`;
}
function subtrair() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  const subtracao = n1 - n2;

  document.getElementById("resultado").innerHTML = `Resultado: ${subtracao}`;
}
function multiplicar() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  const multiplicacao = n1 * n2;

  document.getElementById("resultado").innerHTML = `Resultado: ${multiplicacao}`;
}
function dividir() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  const divisao = n1 / n2;

  document.getElementById("resultado").innerHTML = `Resultado: ${divisao.toFixed()}`;
}
