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
app.get('/students', async (req, res) => {
    try{
        const students = await Student.find();

        res.json(students);
    }
    catch(err)
    {
        res.status(500).send(err.message);

    }
}
);
app.put('/students/:id', async (req, res) => {
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(student);
    
    }
    catch(err){
        res.status
    }
});

app.delete('/students/:id', async (req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    app.listen(3000, () => {
    console.log("server is runnig at port 3000")
});
