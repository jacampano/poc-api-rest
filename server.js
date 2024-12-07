const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/tasks', tasksRoutes);

// Ruta para el WADL
app.get('/api/tasks.wadl', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tasks.wadl'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
