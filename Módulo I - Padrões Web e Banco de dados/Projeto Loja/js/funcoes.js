function adicionar(produto) {
  const qtd = document.getElementById(`qtd_${produto}`);
  const valor = document.getElementById(`valor_${produto}`);
  const total = document.getElementById(`total_${produto}`);

  qtd.innerHTML++;
}
function subtrair(produto) {
  const qtd = document.getElementById(`qtd_${produto}`);
  const valor = document.getElementById(`valor_${produto}`);
  const total = document.getElementById(`total_${produto}`);

  if (qtd.innerHTML > 0) {
    qtd.innerHTML--;
  }
}
