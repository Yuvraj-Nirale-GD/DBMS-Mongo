const express = require('express');
const Student = require('./models/Student')

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.post('/student', async (req, res) => {
    try {
        const student = new Student(req.body);

        await student.save();

        res.send("Student added successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
});
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    app.listen(3000, () => {
    console.log("server is runnig at port 3000")
});
