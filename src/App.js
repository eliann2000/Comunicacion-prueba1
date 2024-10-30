import React, { useState } from "react";
import ModeSelector from "./components/ModeSelector";
import LightsControl from "./components/LightsControl";
import ShuttersControl from "./components/ShuttersControl";
import ScheduleControl from "./components/ScheduleControl";
import ClassroomManagement from "./components/ClassroomManagement";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTab, setCurrentTab] = useState("control");
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="App">
      <h1>Control de Sistema Domótico</h1>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <nav>
            <button onClick={() => setCurrentTab("control")}>Control del Sistema</button>
            <button onClick={() => setCurrentTab("classroom")}>Gestión de Aulas</button>
            <button onClick={() => setCurrentTab("schedule")}>Configurar Horario</button>
          </nav>

          {currentTab === "control" && (
            <>
              <ModeSelector selectedClassroom={selectedClassroom} />
              <LightsControl selectedClassroom={selectedClassroom} />
              <ShuttersControl selectedClassroom={selectedClassroom} />
            </>
          )}
          {currentTab === "classroom" && (
            <ClassroomManagement
              setSelectedClassroom={setSelectedClassroom}
              selectedClassroom={selectedClassroom}
            />
          )}
          {currentTab === "schedule" && <ScheduleControl />}
        </>
      )}
    </div>
  );
}

export default App;
