# Features:
Create Tasks: Users can create to-do tasks by providing a title and description.

List Recent Tasks: Only the 5 most recent tasks are displayed in the UI.

Mark Tasks as Done: Users can mark tasks as completed, and completed tasks are removed from the UI.

--------------------------------------------------------------------------------------------------------
# Architecture:
The system consists of three main components:

Frontend: A Single Page Application (SPA) built with React.

Backend: A REST API built with FastAPI (Python).

Database: A PostgreSQL database to store tasks.

--------------------------------------------------------------------------------------------------------
# Tech Stack:
Frontend: React, HTML, CSS

Backend: FastAPI (Python)

Database: PostgreSQL

Containerization: Docker, Docker Compose

--------------------------------------------------------------------------------------------------------
# Prerequisites:
Before running the project, ensure you have the following installed:

Docker (with Docker Compose)

Git (optional, for cloning the repository)

--------------------------------------------------------------------------------------------------------
# Getting Started:
Follow these steps to set up and run the project locally.

1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Run the Application with Docker Compose
Start all services (frontend, backend, and database) using Docker Compose:
docker-compose up --build

3. Access the Application
Open your browser and navigate to: http://localhost:3000
The frontend will be running on port 3000, and the backend API will be accessible on port 8000.




