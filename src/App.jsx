import React, { useEffect, useState } from "react";

function App() {
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    const fetchSignal = async () => {
      try {
        const response = await fetch("https://volume-signal-backend.onrender.com/signal");
        const data = await response.json();
        setSignal(data.signal);
      } catch (error) {
        console.error("Error fetching signal:", error);
        setSignal("Error al conectar con el servidor.");
      }
    };

    fetchSignal();

    const interval = setInterval(fetchSignal, 10000); // cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Volume Signal Activo</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Señal actual: <strong>{signal || "Cargando..."}</strong>
      </p>
    </div>
  );
}

export default App;
