UPDATE cliente
  SET cidade = "Teresina", uf = "PI", sexo = "M", estado_civil = "S"
  WHERE codcliente = 3;

-- Limpar colunas em toda a tabela, usado para que os clientes atualizarem seus dados

UPDATE cliente
  SET cidade = Null, uf = NULL