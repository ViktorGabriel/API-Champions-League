# 🏆 API Champions League

![Node.js](https://img.shields.io/badge/Node.js-v20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)

## 📌 Título e Descrição

A **API Champions League** é uma API RESTful desenvolvida em **Node.js** com **TypeScript** e **Express**. O projeto fornece uma interface centralizada para gerenciamento de dados de jogadores de futebol e clubes da UEFA Champions League. 

A arquitetura foi construída seguindo o padrão de **camadas (Layered Architecture)** divididas em *Controllers*, *Services*, *Repositories* e *Models*, além de gerenciamento padronizado de respostas HTTP através de utilitários auxiliares (*HTTP Helpers*).

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no lado do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript com tipagem estática.
- **[Express](https://expressjs.com/)**: Framework web minimalista para construção de APIs.
- **[TSX](https://github.com/privatenumber/tsx)**: Executor rápido para TypeScript e monitoramento em tempo real (*watch mode*).
- **[TSUP](https://tsup.egoist.dev/)**: Bundler para transpilação e build de produção TypeScript para JavaScript.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **[Node.js](https://nodejs.org/)** (Versão `20.x` ou superior recomendada)
- **[npm](https://www.npmjs.com/)** (Vem instalado por padrão com o Node.js)
- **[Git](https://git-scm.com/)**

---

## 🚀 Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/ViktorGabriel/API-Champions-League.git
cd Api-Champions
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto contendo a porta do servidor:

```env
PORT=3333
```

### 4. Executar a aplicação

#### 🔄 Modo de Desenvolvimento (Watch Mode)
Executa a aplicação e recarrega automaticamente a cada alteração salva:

```bash
npm run start:watch
```

#### ⚡ Modo de Desenvolvimento Simples
Executa a aplicação sem o modo watch:

```bash
npm run start:dev
```

#### 📦 Build de Produção
Gera os arquivos otimizados de produção na pasta `dist/`:

```bash
npm run dist
```

#### ⏩ Executar o Build de Produção
Gera o build e inicia o servidor compilado:

```bash
npm run start:dist
```

O servidor estará rodando em: `http://localhost:3333/api`

---

## 📁 Estrutura do Projeto

```text
Api-Champions/
├── src/
│   ├── controllers/            # Camada de controle (recebe requisições e envia respostas)
│   │   ├── clubs-controller.ts
│   │   └── players-controller.ts
│   ├── services/               # Regras de negócio da aplicação
│   │   ├── clubs-services.ts
│   │   └── players-services.ts
│   ├── repositories/           # Acesso e manipulação de dados
│   │   ├── clubs-repository.ts
│   │   └── player-repository.ts
│   ├── models/                 # Definição de interfaces e tipos de dados
│   │   ├── clubs-model.ts
│   │   ├── http-reponse-model.ts
│   │   ├── player-model.ts
│   │   └── statistics-model.ts
│   ├── data/                   # Arquivos de dados (JSON)
│   │   └── clubs.json
│   ├── utils/                  # Utilitários auxiliares (ex: tratadores de resposta HTTP)
│   │   └── http-helper.ts
│   ├── routes/                 # Mapeamento e definição das rotas Express
│   │   └── routes.ts
│   ├── app.ts                  # Configuração do app Express
│   └── server.ts               # Ponto de entrada do servidor
├── .env                        # Variáveis de ambiente
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔌 Uso e Endpoints da API

Todas as rotas possuem o prefixo `/api`.

### ⚽ Jogadores (`/api/players`)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/players` | Retorna a lista de todos os jogadores cadastrados |
| `GET` | `/api/players/:id` | Retorna um jogador específico pelo seu ID |
| `POST` | `/api/players` | Cadastra um novo jogador |
| `DELETE` | `/api/players/:id` | Remove um jogador pelo ID |
| `PATCH` | `/api/players/:id` | Atualiza as estatísticas de um jogador existente |

#### Exemplo de requisição `POST /api/players`:

```json
{
  "name": "Lionel Messi",
  "club": "Inter Miami",
  "nationality": "Argentina",
  "position": "Forward",
  "statistics": {
    "overall": 90,
    "pace": 80,
    "shooting": 89,
    "passing": 90,
    "dribbling": 94,
    "defending": 33,
    "physical": 64
  }
}
```

#### Exemplo de requisição `PATCH /api/players/1` (Atualizar Estatísticas):

```json
{
  "overall": 92,
  "pace": 89,
  "shooting": 93,
  "passing": 82,
  "dribbling": 88,
  "defending": 35,
  "physical": 78
}
```

---

### 🛡️ Clubes (`/api/clubs`)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/clubs` | Retorna a lista completa dos 36 clubes da Champions League |

#### Exemplo de resposta `GET /api/clubs`:

```json
[
  {
    "id": 1,
    "name": "Real Madrid"
  },
  {
    "id": 2,
    "name": "Barcelona"
  },
  {
    "id": 3,
    "name": "PSG"
  }
]
```

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. **Faça um Fork** do projeto.
2. **Crie uma Branch** para sua funcionalidade:
   ```bash
   git checkout -b feature/minha-nova-feature
   ```
3. **Faça o Commit** das suas alterações:
   ```bash
   git commit -m "feat: adiciona minha nova funcionalidade"
   ```
4. **Envie para a Branch de origem**:
   ```bash
   git push origin feature/minha-nova-feature
   ```
5. **Abra um Pull Request** no repositório principal.

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo de licença para mais detalhes.
