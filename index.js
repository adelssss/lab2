import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Task } from './models/task.js';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

mongoose.connect('mongodb://localhost:27017/lab2')
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err));

app.get('/get', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        task.done = !task.done;
        const updatedTask = await task.save();
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/add', async (req, res) => {
    const taskName = req.body.task;
    try {
        if (!taskName) {
            return res.status(400).json({ message: "Task content cannot be empty" });
        }

        const existingTask = await Task.findOne({ task: taskName });
        if (existingTask) {
            return res.status(400).json({ message: "Task already exists in the database" });
        }

        const newTask = await Task.create({ task: taskName });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
