# Student Management System

A simple Student Management System built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations (Create, Read, Update, Delete) on student records.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML
- CSS
- JavaScript

## Features

- Add a new student
- View all students
- Update student details
- Delete student records

## Project Structure

```text
project-folder/
│
├── models/
│   └── Student.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Requirements

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- A MongoDB Atlas account

## How to Run the Project on Your Machine

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

### 2. Install Dependencies

Run the following command:

```bash
npm install
```

This installs all the dependencies listed in `package.json`.

### 3. Configure the Environment Variables

Create a file named `.env` in the root directory of the project.

Add the following structure:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

Replace the placeholders with your own MongoDB Atlas details.

For example:

- `<username>`: Your MongoDB database username
- `<password>`: Your MongoDB database user's password
- `<cluster-url>`: Your Atlas cluster address
- `<database-name>`: The database name you want to use

**Important:**

- You must have your own MongoDB Atlas database user.
- Add your machine's public IP address to the MongoDB Atlas Network Access list.
- Never share or upload your actual `.env` file or MongoDB credentials to GitHub.

### 4. Start the Server

Run:

```bash
node server.js
```

If you have Nodemon installed, you can instead run:

```bash
npx nodemon server.js
```

You should see messages indicating that the server is running and MongoDB is connected.

### 5. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

## CRUD Operations

The application supports the following API endpoints:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/students` | Add a new student |
| GET | `/students` | Get all students |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## Environment Variables

The project uses a `.env` file to store sensitive configuration details, such as the MongoDB connection string.

The `.env` file is excluded from Git using `.gitignore`. Anyone running this project on another machine must create their own `.env` file.

## Author

Created as a college assignment.