import React, { useState, useEffect } from "react";

function ClassroomManagement({ setSelectedClassroom, selectedClassroom }) {
  const [classrooms, setClassrooms] = useState([]);
  const [newClassroom, setNewClassroom] = useState("");

  const fetchPresenceData = async () => {
    const response = await fetch("/api/classroomPresence");
    const data = await response.json();
    setClassrooms(data);
  };

  const handleAddClassroom = () => {
    if (newClassroom.trim() !== "") {
      const newClass = { name: newClassroom, isOccupied: false };
      setClassrooms([...classrooms, newClass]);
      setNewClassroom("");
    }
  };

  useEffect(() => {
    fetchPresenceData();
  }, []);

  return (
    <div>
      <h2>Gestión de Aulas</h2>
      <input
        type="text"
        value={newClassroom}
        placeholder="Nombre del aula"
        onChange={(e) => setNewClassroom(e.target.value)}
      />
      <button onClick={handleAddClassroom}>Agregar Aula</button>

      <h3>Aulas Disponibles</h3>
      <ul>
        {classrooms.map((classroom, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              fontWeight: selectedClassroom === classroom.name ? "bold" : "normal",
            }}
            onClick={() => setSelectedClassroom(classroom.name)}
          >
            {classroom.name} - {classroom.isOccupied ? "Ocupada" : "Libre"}
          </li>
        ))}
      </ul>

      {selectedClassroom && (
        <p>
          Aula seleccionada: <strong>{selectedClassroom}</strong>
        </p>
      )}
    </div>
  );
}

export default ClassroomManagement;
