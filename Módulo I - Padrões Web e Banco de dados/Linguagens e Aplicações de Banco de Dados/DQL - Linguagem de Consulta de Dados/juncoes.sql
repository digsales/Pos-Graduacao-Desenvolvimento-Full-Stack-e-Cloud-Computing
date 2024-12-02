-- Seleciona tudo das tabelas cliente e endereco onde a PK e a FK são iguais em ambas
SELECT *
  FROM cliente, endereco
  WHERE cliente.codcliente = endereco.codcliente;

-- INNER JOIN faz o mesmo de cima de uma maneira mais eficiente
SELECT *
  FROM cliente
  INNER JOIN endereco ON
  endereco.codcliente = cliente.codcliente;