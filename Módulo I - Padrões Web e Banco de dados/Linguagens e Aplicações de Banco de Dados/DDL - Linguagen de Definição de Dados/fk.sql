CREATE TABLE cliente (
  codcliente INT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE endereco (
  codendereco INT PRIMARY KEY,
  uf CHAR(2) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  bairro VARCHAR(50),
  codcliente INT REFERENCES cliente(codcliente)
)