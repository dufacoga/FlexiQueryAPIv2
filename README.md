# 🔐 FlexiQueryAPIv2 - Secure Dynamic SQL Executor API (Node.js)

<p align="center">
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/issues"><img src="https://img.shields.io/github/issues/dufacoga/FlexiQueryAPIv2"/></a>
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/stargazers"><img src="https://img.shields.io/github/stars/dufacoga/FlexiQueryAPIv2"/></a>
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/network/members"><img src="https://img.shields.io/github/forks/dufacoga/FlexiQueryAPIv2"/></a>
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/commits/master"><img src="https://img.shields.io/github/last-commit/dufacoga/FlexiQueryAPIv2"/></a>
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg"/></a>
  <a href="https://github.com/dufacoga/FlexiQueryAPIv2/blob/master/LICENSE"><img src="https://img.shields.io/github/license/dufacoga/FlexiQueryAPIv2"/></a>
  <br />
  <a href="https://www.paypal.com/donate/?business=R2J9NH55HXKGJ&no_recurring=0&currency_code=USD"><img src="https://img.shields.io/badge/PayPal-Donate-blue.svg"/></a>
  <a href="https://www.patreon.com/dufacoga"><img src="https://img.shields.io/badge/Patreon-Become%20a%20Patron-black.svg"/></a>
  <a href="https://ko-fi.com/dufacoga"><img src="https://img.shields.io/badge/Ko--fi-Buy%20me%20a%20coffee-FFFFFF.svg?logo=ko-fi&logoColor=white"/></a>
</p>

**FlexiQueryAPIv2** is a secure and flexible Node.js REST + GraphQL API to perform basic SQL operations using generic DTOs. It supports **SELECT**, **INSERT**, **UPDATE**, and **DELETE** with internal validation and API key protection.

---

## 🚀 Features

- ✅ Accepts generic DTOs for SQL operations via REST or GraphQL
- 🔒 Strong query validation to prevent injection or unsafe operations
- 🔌 Easily switch between **SQLite**, **SQL Server**, and **MySQL**
- 🧪 Swagger UI for REST and GraphiQL for GraphQL
- 💡 Clean architecture using factories and interfaces

---

## 🧰 Tech Stack

- Node.js + Express
- SQLite / MySQL / SQL Server drivers
- Swagger (OpenAPI 3)
- GraphQL with `express-graphql`
- dotenv for config loading

---

## ⚙️ Configuration

Example `.env`:

```env
PORT=4000
DB_TYPE=sqlite
SQLITE_PATH=./database/example.db
API_KEY=supersecret123
```

---

## 📂 Project Structure

```bash
src/
├── application/usecases/
├── config/
├── domain/entities/
├── domain/repositories/
├── infrastructure/
│   ├── db/mysql/
│   ├── db/sqlite/
│   ├── db/sqlserver/
│   └── factories/
├── shared/
│   ├── middleware/
│   └── security/
├── infrastructure/rest/routes/
└── infrastructure/graphql/
```

---

## 🔒 Security

- ✅ Supports SELECT, INSERT, UPDATE, DELETE only
- ✅ Blocks dangerous SQL keywords
- 🔐 Requires valid API key via `X-API-KEY` header
- 🧼 Sanitizes input before execution

---

## 🧪 Sample Request (POST /api/sql/select)

```json
{
  "table": "Users",
  "columns": ["id", "firstName", "email"],
  "where": {
    "age": 30
  }
}
```

> You can test similar requests in Swagger or use `/graphql` with appropriate queries.

---

## 🚀 Run Locally

```bash
git clone https://github.com/dufacoga/FlexiQueryAPIv2.git
cd FlexiQueryAPIv2
npm install
npm start
```

Visit:
- [http://localhost:4000/swagger](http://localhost:4000/swagger)
- [http://localhost:4000/graphql](http://localhost:4000/graphql)

---

## 🧃 Sample Data

The included `example.db` SQLite file provides:

- 👤 200 Users
- 🛒 50 Shopping carts
- 🛍️ Products linked by foreign keys

---

## 📄 License

[MIT License](LICENSE)

---

## 👤 Author

**Douglas Cortes**  
🔗 [LinkedIn](https://www.linkedin.com/in/dufacoga)  
🌐 [dufacoga.github.io](https://dufacoga.github.io)
