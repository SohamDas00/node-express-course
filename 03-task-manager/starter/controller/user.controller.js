import task from "../models/task.models.js"

// GET all tasks
export const userFetch = async (req, res) => {
  try {
    const tasks = await task.find()
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CREATE task
export const userPost = async (req, res) => {
  try {
    const { name, completed } = req.body

    const newTask = new task({
      name,
      completed
    })

    const savedTask = await newTask.save()

    res.status(201).json({ task: savedTask })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// GET single task
export const userFetchOne = async (req, res) => {
  try {
    const { id } = req.params

    const taskData = await task.findById(id)
    if (!taskData) {
      return res.status(404).json({ message: `No task found with id ${id}` })
    }

    res.status(200).json({ task: taskData })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// UPDATE task
export const userUpdate = async (req, res) => {
  try {
    const { id } = req.params

    const updatedTask = await task.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    )

    if (!updatedTask) {
      return res.status(404).json({ message: `No task found with id ${id}` })
    }

    res.status(200).json({ task: updatedTask })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// DELETE task
export const userDelete = async (req, res) => {
  try {
    const { id } = req.params

    const deletedTask = await task.findByIdAndDelete(id)
    if (!deletedTask) {
      return res.status(404).json({ message: `No task found with id ${id}` })
    }

    res.status(200).json({ task: deletedTask })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
