-- Seleciona tudo das tabelas cliente e endereco onde a PK e a FK são iguais em ambas
SELECT *
  FROM cliente, endereco
  WHERE cliente.codcliente = endereco.codcliente;

-- INNER JOIN faz o mesmo de cima de uma maneira mais eficiente (DISTINCT faz com que não apareça linhas duplicadas)
SELECT DISTINCT cliente.nome, endereco.uf
  FROM cliente
  INNER JOIN endereco ON
  endereco.codcliente = cliente.codcliente;

-- Seleciona coluna nome e uf, das tabelmas cliente e endereco, respectivamente, onde a FK e a PK são iguais em ambas, o estado civil do cliente seja "C", casado, e sua uf seja "RJ", Rio de Janeiro.
SELECT DISTINCT cliente.nome, endereco.uf
  FROM cliente
  INNER JOIN endereco ON
  endereco.codcliente = cliente.codcliente
  WHERE cliente.estado_civil = "C"
  AND endereco.uf = "RJ"
  ORDER BY cliente.nome