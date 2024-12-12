const express = require('express');
const cors = require('cors');

// Crear una aplicación de Express
const app = express();

// Configurar middlewares
app.use(cors()); // Permitir solicitudes desde el front-end
app.use(express.json()); // Solicitudes con formato JSON

// Ruta de prueba para /
app.get('/', (req, res) => {
    res.send('Bienvenido al backend del proyecto!');
});

// Ruta de prueba para /api/messages
app.get('/api/messages', (req, res) => {
    res.json({ message: 'Hola desde el back-end UMB!' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001; // Puerto dinámico o 3001
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
