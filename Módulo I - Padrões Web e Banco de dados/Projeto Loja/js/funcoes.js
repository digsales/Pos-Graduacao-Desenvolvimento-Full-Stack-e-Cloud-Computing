function adicionar(produto) {
  const qtd = document.getElementById(`qtd_${produto}`);
  const valor = document.getElementById(`valor_${produto}`);
  const total = document.getElementById(`total_${produto}`);
  const subtotal = document.getElementById(`subtotal`);

  qtd.innerHTML++;

  total.innerHTML = (Number(total.innerHTML) + Number(valor.innerHTML)).toFixed(2);

  subtotal.innerHTML = (Number(subtotal.innerHTML) + Number(valor.innerHTML)).toFixed(2);
}
function subtrair(produto) {
  const qtd = document.getElementById(`qtd_${produto}`);
  const valor = document.getElementById(`valor_${produto}`);
  const total = document.getElementById(`total_${produto}`);
  const subtotal = document.getElementById(`subtotal`);

  if (qtd.innerHTML > 0) {
    qtd.innerHTML--;

    total.innerHTML = (Number(total.innerHTML) - Number(valor.innerHTML)).toFixed(2);

    subtotal.innerHTML = (Number(subtotal.innerHTML) - Number(valor.innerHTML)).toFixed(2);
  }
}
