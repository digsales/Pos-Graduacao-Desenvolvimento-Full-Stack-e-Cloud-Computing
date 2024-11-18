CREATE TABLE cliente(
  codcliente INT PRIMARY KEY,
  nome varchar(50) NOT NULL,
  cidade vcarchar (50),
  sexo char(1),
  estado char(2),
  estadocivil char(2)
);

ALTER TABLE cliente DROP estado;
ALTER TABLE cliente ADD uf char(2);
-- ALTER TABLE cliente RENAME COLUMN estadocivil TO estado_civil
-- Função RENAME não está sendo reconhecida no VSCode
ALTER TABLE cliente DROP estadocivil;
ALTER TABLE cliente ADD estado_civil char(2);
ALTER TABLE cliente ALTER COLUMN estado_civil char(1);