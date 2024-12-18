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

-- Atualizar uma VIEW
CREATE OR REPLACE VIEW vw_alunos_df AS
  SELECT nome
    FROM aluno
    WHERE uf="DF";

-- Outra forma de atualizar uma VIEW
ALTER VIEW vw_alunos_df AS
  SELECT nome
    FROM aluno
    WHERE uf="DF";

-- Melhor maneira de alterar e mais universal nas linguagens SQL é usar o DROP e depois o CREATE, assim você exclui e depois refaz da maneira desejada.

-- Visões são apenas para visualização, não conseguimos inserir, alterar ou excluir dados.