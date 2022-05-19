import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  is_completed: {
    type: Boolean,
    default: false,
  }
});

const Task = new mongoose.model("task", taskSchema);
export default Task;
