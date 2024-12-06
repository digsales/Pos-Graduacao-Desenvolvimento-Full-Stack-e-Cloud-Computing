-- GROUP BY agrupa dados de uma coluna com uma funcao de agregação, HAVING faz a filtragem. No caso está mostrando quantos cliente de cada sexo existe, desde que sexo não seja nulo
SELECT sexo, COUNT(codcliente)
  FROM cliente
  GROUP BY sexo
  HAVING sexo IS NOT NULL;

-- Valor maximo
SELECT MAX(preco)
  FROM acessorio;