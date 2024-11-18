CREATE TABLE cliente(
  codcliente INT PRIMARY KEY,
  nome varchar(50) NOT NULL,
  cidade vcarchar (50),
  sexo char(1),
  estado char(2),
  estadocivil char(2)
);

ALTER TABLE cliente DROP estado;