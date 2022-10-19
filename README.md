# Pure HTTP Server
## Criação de um Servidor HTTP com Node.js
![GitHub](https://img.shields.io/github/license/Nick3n/bounce-3d-league)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Nick3n/pure-http-server)

### Tabela de conteúdos
=================
 * Objetivo do Projeto
 * O que o projeto faz?
    * O que são Rotas na Aplicação?
    * Rotas da Aplicação
 * Instalação
 * Pré-Requisitos
 * Rodando em Sua Máquina

### Objetivo do Projeto

O principal objetivo do projeto é trazer um estudo sobre um servidor feito em Node.js sem a utilização de frameworks, conhecer a linguagem é essencial para um programador, ferramentas terceirizadas podem ajudar no desenvolvimento diário e facilitar tarefas complexas, contudo, conhecer detalhes da plataforma torna o desenvolver inteirado nos detalhes do que acontece "debaixo dos panos".

### O que o projeto faz?

- A aplicação é iniciada em **app.js** com o requerimento de módulos nativos do node.js e o estabelecimento de rotas através do arquivo **route.js**, os módulos são utilizados com a criação de um servidor e o servidor é chamado para responder na porta 3000.

#### O que são Rotas na Aplicação?

- Rotas são trechos de códigos associados com os métodos HTTP, (GET, POST, PUT, DELETE).
- Quando um usuário estabelece uma conexão com a aplicação web, é disparada uma requisição do tipo GET, quando uma requisição é feita através de um formulário poderá ser disparada uma requisição do tipo POST, em alterações do tipo PUT e em remoções do tipo DELETE.

#### Rotas da Aplicação

- Para fins de estudo foi criada a função **requestHandler** que receberia os parâmetros de requisição e resposta. Através da requisição é possível saber qual é a url que está sendo chamada e o método HTTP.
- A função verifica se a url é igual a **localhost:3000**, portanto, a página inicial da aplicação e responde com um formulário em página HTML que será possível realizar uma requisição do método POST para enviar uma mensagem.
- Quando enviado o formulário com o texto da mensagem, o servidor armazenará o texto digitado pelo usuário em um arquivo **message.txt**.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando em sua máquina

```bash
# Clone este repositório
$ git clone git@github.com:Nick3n/pure-http-server.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pure-http-server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação inciará na porta:3000 - acesse <http://localhost:3000>
```