---
sidebar_position: 1
---

# Tutorial

Vamos descobrir como **criar um doc**.

## Começando

Primeiramente é necessário acessar o repositório da **[avanti docs](https://github.com/avanti/docs)**.

Em seguida, clique no botão ![Add file](/img/tutorial/add-file.png) e, por fim, **Create new file**.

## Estrutura

Já na tela de criação do novo arquivo, é necessário seguir o _path_ até onde você deseja criar sua doc.

![Path](/img/tutorial/path.png)

:::tip Se liga
  Lembrando que você deve ir navegando por essa _caixa de texto_ com **/** até chegar na pasta que deseja.
:::

Coloque o nome do arquivo conforme é o nome da sua doc, sequido da extensão **.md**.

![Complete path](/img/tutorial/doc-name.png)

## Arquivo

Agora, na próxima caixa de texto, adicione o conteúdo da sua doc, que deve seguir as regras de formatação **markdown**.

É necessário sempre adicionar no topo do arquivo:

```md
---
sidebar_position: X
---
```

:::note
  O **X** deve ser trocado pelo número da posição da doc na sidebar.
:::

E no final, adicione as suas informações:

```md

```

## Criando uma nova branch

Antes de fazer o **Pull Request**, lembre-se de mudar para uma nova branch e seguir do padrão de nomenclatura `new-doc/` seguido do nome da sua doc `new-doc/minha-doc`.

![New branch](/img/tutorial/new-branch.png)

Em seguida, clique em ![Propose new file](/img/tutorial/propose-new-file.png).

## Finalizando

Na próxima tela, basta clicar em ![Create PR](/img/tutorial/create-pr.png) e aguarde até alguém aceitar a sua doc! 😁
