-- Seleciona tudo das tabelas cliente e endereco onde a PK e a FK são iguais em ambas
SELECT *
  FROM cliente, endereco
  WHERE cliente.codcliente = endereco.codcliente;