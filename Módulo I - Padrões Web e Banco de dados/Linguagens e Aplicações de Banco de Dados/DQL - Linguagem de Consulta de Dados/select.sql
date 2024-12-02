-- Seleciona tudo da tabela cliente
SELECT * FROM cliente;

-- Seleciona a coluna nome da tabela cliente
SELECT nome
  FROM cliente;

-- Seleciona a coluna idade, da tabela cliente, onde o nome é igual a Lucas
SELECT idade
  FROM cliente
  WHERE nome = "Lucas";

-- Selecionando a coluna idade, da tabela cliente, onde o nome é igual a Lucas, e mostrando em ordem ascendente.
SELECT idade
  FROM cliente
  WHERE nome = "Lucas"
  ORDER BY idade ASC;