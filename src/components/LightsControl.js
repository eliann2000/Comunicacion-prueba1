import React from "react";

function LightsControl({ selectedClassroom }) {
  const toggleLights = async (state) => {
    if (!selectedClassroom) {
      alert("Seleccione un aula antes de controlar las luces.");
      return;
    }

    await fetch(`/api/toggleLights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classroom: selectedClassroom, state }),
    });
    alert(`Luces ${state} en ${selectedClassroom}`);
  };

  return (
    <div>
      <h3>Control de Luces</h3>
      <button onClick={() => toggleLights("on")}>Encender</button>
      <button onClick={() => toggleLights("off")}>Apagar</button>
    </div>
  );
}

export default LightsControl;
