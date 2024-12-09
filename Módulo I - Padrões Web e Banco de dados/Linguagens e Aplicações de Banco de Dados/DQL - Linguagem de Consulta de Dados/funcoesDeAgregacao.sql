-- GROUP BY agrupa dados de uma coluna com uma funcao de agregação, HAVING faz a filtragem. No caso está mostrando quantos cliente de cada sexo existe, desde que sexo não seja nulo
SELECT sexo, COUNT(codcliente)
  FROM cliente
  GROUP BY sexo
  HAVING sexo IS NOT NULL;

-- Valor maximo
SELECT MAX(preco)
  FROM acessorio;

-- Valor mínimo
SELECT MIN(preco)
  FROM acessorio;

-- Média aritimética
SELECT AVG(preco)
  FROM acessorio;

-- UNION mostra a união de ambos resultados
SELECT DISTINCT id_turma
  FROM boletim
  WHERE id_turma = 1
UNION
SELECT id_aluno
  FROM aluno
  WHERE uf = "DF";

-- INTERSECT mostra a intersecção, ou seja, os dados em comum
SELECT nome_aluno
  FROM aluno
INTERSECT
SELECT nome_aluno
  FROM aluno
  WHERE uf = "RJ";
