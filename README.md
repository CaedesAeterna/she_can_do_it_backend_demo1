# She Can Do It - Backend API

This is a **NestJS** application using **Knex** (with PostgreSQL) for the database layer.
It includes comprehensive documentation for both the external API (Swagger) and the internal project structure (Compodoc).

## 🚀 Features

*   **Framework**: NestJS (Modular architecture)
*   **Database**: PostgreSQL (via `pg` driver)
*   **ORM/Query Builder**: Knex.js
    *   Automatic migration on startup (`DbMigrationService`)
    *   Global `KnexModule` for dependency injection
*   **Documentation**:
    *   **API**: Swagger / OpenAPI (auto-generated)
    *   **Internal**: Compodoc (static site)

## 🛠️ Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Database Setup**
    The application defaults to a local Postgres instance:
    `postgres://postgres:postgres@localhost:5432/postgres`

    To override this, set the `DATABASE_URL` environment variable.

3.  **Run the Application**
    ```bash
    # development
    npm run start:dev
    ```
    *The app will automatically create the `users` and `tasks` tables if they don't exist.*

## 📚 Documentation

### 1. API Documentation (Swagger)
Once the app is running, visit:
👉 **[http://localhost:3000/api](http://localhost:3000/api)**

To generate a static HTML file of the API docs:
```bash
# Generates docs/api-docs.html
npm run docs:api
```

### 2. Project Documentation (Compodoc)
To generate and serve the internal project documentation (Modules, Services, Graphs):

```bash
# Generates into docs/internal/ and serves on port 8080
npm run docs:internal
```

### 3. Update All Docs
```bash
npm run docs:update
```

## 📂 Project Structure

```
src/
├── common/
│   └── knex/           # Global Knex module & migration service
├── controllers/        # API Controllers (Users, Tasks)
├── models/             # DTOs and Interfaces
├── services/           # Business Logic
└── main.ts             # Entry point (Swagger setup)
```