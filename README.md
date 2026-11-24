# Student Management System

A simple Student Management System built using Node.js, Express.js, MongoDB and Mongoose.

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using MongoDB.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemon

## Features

- Add new student records.
- View all student records.
- Update student information.
- Delete student records.

## Project Structure

```text
Lab8/
│
├── models/
│   └── Student.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation

1. Clone the repository.

2. Install dependencies:

   npm install

3. Create a `.env` file in the root directory.

4. Add your MongoDB connection string:

   MONGO_URI=your_mongodb_connection_string

5. Start the server:

   npx nodemon server.js

The server will run at:

http://localhost:3000

## CRUD Operations

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create | POST | /students |
| Read | GET | /students |
| Update | PUT | /students/:id |
| Delete | DELETE | /students/:id |

## Database

MongoDB Atlas is used to store student records.

## Author

Yuvraj