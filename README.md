# She Can Do It - Backend API demo1

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

1.  **Environment Configuration**
    The project requires a `.env` file to configure local paths (and keep your secrets safe).
    
    ```bash
    # Copy the example file
    cp .env.example .env
    
    # Edit .env to set your desired database storage path
    # DB_VOLUME_PATH=./data-postgres
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Database Setup (Docker)**

    **Linux / macOS:**
    ```bash
    docker-compose up -d
    ```

    **Windows (PowerShell):**
    ```powershell
    docker-compose up -d
    ```
    *Note: Ensure your Docker Desktop is running. If you encounter volume path issues on Windows, use absolute paths in your .env file like `C:/Users/You/data`.*

    **Run without .env (Default):**
    If you don't want to use a custom path, you can run:
    ```bash
    DB_VOLUME_PATH=./postgres-data docker-compose up -d
    ```

4.  **Run the Application**
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