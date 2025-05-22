# Catálogo de Filmes com React e Axios

Este repositório contém o projeto desenvolvido para o componente curricular **"Programação Web 2"**, com o objetivo de praticar operações CRUD (Create, Read, Update, Delete) utilizando a biblioteca Axios para comunicação com a API pública [MockAPI](https://mockapi.io/).

## 📋 Descrição do Projeto

A aplicação é uma SPA (Single Page Application) construída com React, consumindo a API pública [MockAPI](https://mockapi.io/) para realizar as seguintes operações:

- **Create**: Criação de um novo filme.
- **Read**: Leitura de todos os filmes existentes.
- **Update**: Atualização de filmes existentes.
- **Delete**: Remoção de filmes.

Essas operações são realizadas por meio de chamadas HTTP com Axios, e o estado da aplicação é gerenciado de forma eficiente utilizando os hooks do React (`useState`, `useEffect`).

## 💻 Tecnologias Utilizadas

- **React** (com Vite.js)
- **Axios** para requisições HTTP
- **React Router DOM** para navegação entre páginas
- **Bootstrap** para estilização e responsividade
- **JavaScript** (ES6+)
- **HTML5** e **CSS3**

## 🚀 Funcionalidades

- Interface moderna para listagem e gerenciamento de filmes.
- Formulário para criação e edição de filmes com validação.
- Exclusão de filmes com confirmação.
- Consumo de API pública com Axios.
- Manipulação do estado via React Hooks.
- Feedback visual para ações como criação, edição e exclusão.

## 📁 Estrutura do Projeto

```
movie-catalog-crud-axios/
├── public/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Create.jsx   # Página para criar filmes
│   │   ├── Delete.jsx   # Página para deletar filmes
│   │   ├── Header.jsx   # Cabeçalho da aplicação
│   │   ├── Home.jsx     # Página inicial com listagem de filmes
│   │   ├── NotFound.jsx # Página 404
│   │   ├── Read.jsx     # Página para visualizar detalhes de um filme
│   │   └── Update.jsx   # Página para editar filmes
│   ├── App.jsx          # Configuração das rotas
│   ├── main.jsx         # Ponto de entrada da aplicação
│   ├── App.css          # Estilos globais
│   └── index.css        # Estilos adicionais
├── package.json         # Dependências e scripts do projeto
├── vite.config.js       # Configuração do Vite
└── README.md            # Documentação do projeto
```

## 📌 Observações

- A API utilizada ([MockAPI](https://mockapi.io/)) persiste os dados, permitindo que as operações de criação, atualização e exclusão sejam refletidas na API.
- Este projeto tem fins educacionais e é utilizado como base para o aprendizado de requisições HTTP e manipulação de DOM com React.

## 📚 Créditos

Projeto desenvolvido como parte da disciplina **PRW2**, sob orientação do professor responsável.