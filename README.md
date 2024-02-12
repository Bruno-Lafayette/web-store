# Teste Frontend React Developer

## Objetivos do teste

Desenvolver um aplicativo simples em React (Ou usando JS puro caso não tenha conhecimento em nenhum framework), simulando uma loja online, de forma que consuma uma API REST (simule com o arquivo dbTeste.json utilizando a dependência JSON Server). Nesse aplicativo você deverá listar os produtos, exibir cada um individualmente e criar uma sistemática de carrinho de compras para que o usuário adicione/remova os produtos que irá comprar e tenha, antes de finalizar sua compra, um resumo do carrinho.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [server-json](https://www.npmjs.com/package/json-server) e o [NodeJS](https://nodejs.org/en). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Projeto

```bash
# Clone este repositório
$ git clone https://github.com/Bruno-Lafayette/web-store.git

# Acesse a pasta do projeto no terminal/cmd
$ cd web-store 

# Instale as dependências
$ npm install

# Execute o Json Server para simular a API
$ npx json-server db.json

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação irá rodar na porta:5174 - acesse <hhttp://localhost:5174>
# A API vai subir na porta 3000 <http://localhost:3000/>
```

