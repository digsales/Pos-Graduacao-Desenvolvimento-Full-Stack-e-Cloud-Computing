-- Criar uma tabela visual para facilitar uma filtragem específica.
CREATE VIEW vw_alunos_df AS
  SELECT *
    FROM aluno
    WHERE uf="DF";

-- Para permitir outras instruções além do CREATE VIEW no VSCode
GO

-- Mostrar VIEW
SELECT * FROM vw_alunos_df

-- Excluir VIEW
DROP VIEW vw_alunos_df