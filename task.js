import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        maxlength: 100,
    },
    done: {
        type: Boolean,
        default: false,
    },
});

export const Task = mongoose.model('Task', taskSchema);
