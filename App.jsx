import React, { useEffect, useState } from "react";

function App() {
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    fetch("https://bot-qtjz.onrender.com/signal")
      .then((res) => res.json())
      .then((data) => setSignal(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {signal ? (
          <div className="bg-white shadow-xl rounded-lg p-6 text-center">
            <img src={signal.logo} alt="token logo" className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{signal.token}/USDT</h2>
            <p className="text-xl text-green-600 font-semibold">${signal.price}</p>
            <p className="text-sm mt-2">Volumen: ${signal.volume.toLocaleString()}</p>
            <p className="mt-4 text-gray-600">{signal.direction}</p>
            <p className="mt-1 text-xs text-gray-400">Hora (Miami): {signal.hora_miami}</p>
          </div>
        ) : (
          <p className="text-center">Cargando señal...</p>
        )}
      </div>
    </div>
  );
}

export default App;