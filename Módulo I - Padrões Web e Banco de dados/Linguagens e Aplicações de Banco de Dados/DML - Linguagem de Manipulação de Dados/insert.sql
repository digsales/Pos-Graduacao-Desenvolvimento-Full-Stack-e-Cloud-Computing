-- Primeira maneira

INSERT INTO cliente (
  codcliente,
  nome,
  cidade,
  sexo,
  estado,
  estadocivil
) VALUES (
  1,
  "Ana Silva",
  "Duque de Caxias",
  "F",
  "RJ",
  "C"
);

-- Maneira simplificada

INSERT INTO cliente VALUES (
  1,
  "Ana Silva",
  "Duque de Caxias",
  "F",
  "RJ",
  "C"
);

-- Os dados que não foram selecionados serão NULL

INSERT INTO cliente (
  codcliente,
  nome
) VALUES (
  3,
  "Pedro"
);