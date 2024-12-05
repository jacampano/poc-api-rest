const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../data/tasks.json');

// Leer datos desde el archivo
const readTasksFromFile = () => {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
};

// Guardar datos en el archivo
const writeTasksToFile = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

exports.getAllTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.json(tasks);
};

exports.getTaskById = (req, res) => {
    const tasks = readTasksFromFile();
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    task ? res.json(task) : res.status(404).send('Tarea no encontrada');
};

exports.createTask = (req, res) => {
    const tasks = readTasksFromFile();
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Tarea no encontrada');

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...req.body
    };
    writeTasksToFile(tasks);
    res.json(tasks[taskIndex]);
};

exports.deleteTask = (req, res) => {
    const tasks = readTasksFromFile();
    const filteredTasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
    if (tasks.length === filteredTasks.length) return res.status(404).send('Tarea no encontrada');

    writeTasksToFile(filteredTasks);
    res.status(204).send();
};
