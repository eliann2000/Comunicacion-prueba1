import React, { useState } from "react";

function ScheduleControl() {
  const [openTime, setOpenTime] = useState(480); // 8:00 AM por defecto
  const [closeTime, setCloseTime] = useState(1200); // 8:00 PM por defecto

  const handleScheduleChange = async () => {
    await fetch("/api/setSchedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ open: openTime, close: closeTime }),
    });
    alert("Horario actualizado");
  };

  return (
    <div>
      <h2>Configurar Horario</h2>
      <label>
        Hora de Apertura (minutos desde medianoche):
        <input
          type="number"
          value={openTime}
          onChange={(e) => setOpenTime(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Hora de Cierre (minutos desde medianoche):
        <input
          type="number"
          value={closeTime}
          onChange={(e) => setCloseTime(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button onClick={handleScheduleChange}>Guardar Horario</button>
    </div>
  );
}

export default ScheduleControl;
