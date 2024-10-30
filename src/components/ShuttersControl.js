// ShuttersControl.js
import React, { useState } from 'react';

function ShuttersControl({ aulaSeleccionada }) {
  const [estadoPersiana, setEstadoPersiana] = useState('cerrada');

  const cambiarEstadoPersiana = async (nuevoEstado) => {
    if (!aulaSeleccionada) {
      alert("Selecciona un aula para controlar la persiana.");
      return;
    }
    
    try {
      const response = await fetch(`/api/shutters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          state: nuevoEstado,
          aula: aulaSeleccionada
        })
      });

      if (response.ok) {
        setEstadoPersiana(nuevoEstado === 'open' ? 'abierta' : 'cerrada');
        alert("Estado de la persiana actualizado correctamente.");
      } else {
        alert("Error al cambiar el estado de la persiana.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al intentar cambiar el estado de la persiana.");
    }
  };

  return (
    <div>
      <h2>Control de Persiana</h2>
      <p>Estado actual: {estadoPersiana}</p>
      <button onClick={() => cambiarEstadoPersiana('open')}>Abrir Persiana</button>
      <button onClick={() => cambiarEstadoPersiana('close')}>Cerrar Persiana</button>
    </div>
  );
}

export default ShuttersControl;
