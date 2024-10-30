import React from "react";

function ModeSelector({ selectedClassroom }) {
  const setMode = async (mode) => {
    if (!selectedClassroom) {
      alert("Seleccione un aula antes de aplicar el modo.");
      return;
    }

    await fetch(`/api/setMode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classroom: selectedClassroom, mode }),
    });
    alert(`Modo ${mode} aplicado a ${selectedClassroom}`);
  };

  return (
    <div>
      <h3>Modo de Operación</h3>
      <button onClick={() => setMode("automatico")}>Automático</button>
      <button onClick={() => setMode("manual")}>Manual</button>
    </div>
  );
}

export default ModeSelector;
