// Importar dependencias necesarias
const express = require('express');
const cors = require('cors');

// Crear una aplicación de Express
const app = express();

// Configurar middlewares
app.use(cors()); // Permitir solicitudes desde el front-end
app.use(express.json()); // solicitudes con formato JSON

// Ruta de prueba
app.get('/api/messages', (req, res) => {
    res.json({ message: 'Hola desde el back-end UMB!' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001; // Utiliza el puerto proporcionado por Vercel o el puerto 3001
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
