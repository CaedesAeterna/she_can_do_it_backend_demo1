-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- In a real app, this should be hashed!
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- pending, in_progress, completed
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Mock Users
INSERT INTO users (email, password, first_name, last_name) VALUES
('alice@example.com', 'securepass1', 'Alice', 'Smith'),
('bob@example.com', 'securepass2', 'Bob', 'Johnson'),
('charlie@example.com', 'securepass3', 'Charlie', 'Brown')
ON CONFLICT (email) DO NOTHING;

-- Insert Mock Tasks
INSERT INTO tasks (title, description, status, user_id) VALUES
('Setup Project', 'Initialize the NestJS app and Docker', 'completed', 1),
('Design DB', 'Create initial schema for users and tasks', 'completed', 1),
('Implement Auth', 'Setup JWT and local strategy', 'pending', 2),
('Frontend Mockup', 'Create Figma designs for the dashboard', 'in_progress', 3),
('Write Tests', 'Unit tests for the user service', 'pending', 1);
