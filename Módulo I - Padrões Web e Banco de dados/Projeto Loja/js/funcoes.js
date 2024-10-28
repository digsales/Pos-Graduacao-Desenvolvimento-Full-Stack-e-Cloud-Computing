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

const subtotal = document.getElementById(`subtotal`);
const total_1 = document.getElementById(`total_1`);
const total_2 = document.getElementById(`total_2`);
const total_3 = document.getElementById(`total_3`);

subtotal.innerHTML = (Number(total_1.innerHTML) + Number(total_1.innerHTML) + Number(total_3.innerHTML)).toFixed(2);
