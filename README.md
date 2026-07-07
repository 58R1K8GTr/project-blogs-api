# 📝 Blogs API — Desenvolvimento Back-End com Node.js & Sequelize

A **Blogs API** é uma aplicação back-end full RESTful desenvolvida em Node.js para gerenciar a infraestrutura de conteúdo de uma plataforma de blogs. O núcleo do projeto foca em modelagem de dados relacionais, operações completas de CRUD de postagens e usuários, alinhado a um ecossistema seguro de autenticação.

---

## 🚀 Habilidades Desenvolvidas & Consolidadas

Este projeto consolidou conceitos avançados de arquitetura de software, ORMs e segurança da informação:

* **Arquitetura RESTful:** Criação de endpoints estruturados sob as melhores práticas do protocolo HTTP, utilizando verbos adequados (`GET`, `POST`, `PUT`, `DELETE`) e retornos semânticos de códigos de status (`200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `409 Conflict`).
* **Modelagem Relacional Avançada com Sequelize ORM:**
    * Tratamento de mapeamento objeto-relacional estruturando tabelas em `snake_case` com consumo em `camelCase` via JavaScript.
    * Implementação prática de relacionamentos **1:N (Um para Muitos)** ligando `Users` a seus respectivos `BlogPosts`.
    * Implementação prática de relacionamentos complexos **N:N (Muitos para Muitos)** através de chaves primárias compostas na tabela associativa `PostCategories`, permitindo vincular múltiplos posts a múltiplas categorias de forma performática.
* **Autenticação e Proteção com JWT (JSON Web Tokens):**
    * Desenvolvimento de rotas de login seguras gerando tokens com expiração baseados em variáveis criptográficas de ambiente (`JWT_SECRET`).
    * Criação de **Middlewares de Autenticação** injetáveis para blindar rotas sensíveis contra acessos não autorizados.
* **Containers e Ambientes de Testes:**
    * Isolamento do ecossistema de microsserviços do servidor e banco de dados via Docker Compose.
    * Estruturação de bancos de dados voláteis separados (`*-test` vs `*-dev`) garantindo a integridade dos dados durante testes automatizados com Jest.

---

## 🎲 Arquitetura do Banco de Dados (DER)

A estrutura relacional da aplicação foi mapeada seguindo o seguinte padrão de entidades:

1.  **`users`:** Armazena o cadastro dos escritores do blog. Cada e-mail é único.
2.  **`categories`:** Armazena as etiquetas/assuntos de categorização dos posts.
3.  **`blog_posts`:** Contém o texto e o título das postagens, amarrados a um autor específico via chave estrangeira (`user_id`).
4.  **`posts_categories`:** Tabela de junção (Join Table) que gerencia os relacionamentos N:N unindo chaves estrangeiras compostas de `post_id` e `category_id`.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Runtime Engine:** Node.js (Versão 16)
* **Framework Web:** Express
* **ORM / Banco de Dados:** Sequelize CLI / MySQL 8
* **Segurança:** JSON Web Token (JWT)
* **Análise Estática de Código:** ESLint
* **Testes Automatizados:** Jest

---

## 🐳 Como Executar a Aplicação com Docker

A infraestrutura completa da API e do banco MySQL pode ser inicializada localmente com facilidade.

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:seu-usuario/sd-040-project-blogs-api.git
    cd sd-040-project-blogs-api
    ```

2.  **Suba os containers do ecossistema:**
    ```bash
    docker-compose up -d --build
    ```
    *Isso criará os containers `blogs_api` (Node) e `blogs_api_db` (MySQL) rodando em segundo plano.*

3.  **Acesse o terminal interativo do container da API:**
    ```bash
    docker exec -it blogs_api bash
    ```

4.  **Instale as dependências e rode as Migrations (Dentro do container):**
    ```bash
    npm install
    npm start # O script prestart executará as migrations e seeds do Sequelize
    ```

5.  **Acesse o servidor:**
    A API estará ativa ouvindo requisições na porta local `http://localhost:3001`.

---

## 🧪 Executando os Testes e o Linter

Todas as rotas e validações de banco de dados contam com testes automatizados integrados.

* **Para rodar todos os testes de integração:**
    ```bash
    npm test
    ```
* **Para validar as regras estritas de formatação de código (Linter):**
    ```bash
    npm run lint
    ```

---

## 📁 Estrutura Base de Pastas da Aplicação

O projeto adota uma arquitetura limpa dividindo as responsabilidades do ORM e das rotas:

```text
src/
├── config/          # Configuração de credenciais do banco (config.js)
├── migrations/      # Histórico estrutural de criação das tabelas SQL
├── models/          # Entidades lógicas funcionais do Sequelize (User, BlogPost, etc.)
├── seeders/         # Dados fictícios iniciais para popular o ambiente
├── app.js           # Orquestração de Middlewares e Rotas Express
└── server.js        # Arquivo de inicialização e escuta da porta do servidor
