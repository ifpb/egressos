# Egressos do IFPB

O objetivo deste repositório consiste em exibir os alunos egressos do IFPB. Caso você ainda não esteja neste base, ou se você deseja atualizar alguma informação, basta fazer um Pull Request enviando os seus dados.

O primeiro passo seria declarar seus dados seria editar o arquivo `data/egressos.json` seguindo este formato para cada aluno:

```json
[
  {
    "id": 20051370420,
    "nomeSimples": "Luiz Carlos Chaves",
    "nome": "Luiz Carlos Rodrigues Chaves",
    "email": "lucachaves@gmail.com",
    "avatar": "20051370420.jpg",
    "linkedin": "https://www.linkedin.com/in/luiz-chaves-4a045b35/",
    "curso": "cstsi",
    "campus": "campus-jp"
  }
]
```

Detalhe, vamos padronizar o `id` como sendo a sua matrícula do curso.

Já a imagem avatar deve ser colocada na pasta `img/egressos/`, preferencialmente seguindo o formato `numero_da_matricula.jpg` e com o tamanho de 300x300.

Gostou da ideia? Então compartilhe com seus colegas que já concluíram!