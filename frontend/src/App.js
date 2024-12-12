import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Conecta con el back-end
        fetch('http://localhost:3001/api/messages')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Proyecto Web Completo</h1>
            {/* Mostrar mensaje del back-end */}
            <p>{message || 'Cargando mensaje...'}</p>
            {/* Mostrar la imagen */}
            <img src="/mi-imagen.jpg" alt="Descripción de la imagen" style={{ width: '300px', height: 'auto' }} />
        </div>
    );
}

export default App;

