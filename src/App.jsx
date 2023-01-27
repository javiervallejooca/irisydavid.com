import { useState, useEffect } from "react";
import logo from "./img/vite.svg";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState("");

  const weddingDate = new Date("2023-09-30T13:00:00");

  useEffect(() => {
    updateTime();
  }, [timeLeft]);

  const updateTime = () => {
    setInterval(calculateTime, 1000);
  };

  const calculateTime = () => {
    let now = new Date().getTime();
    let time = weddingDate - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    setTimeLeft(
      `Quedan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
    );
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-50 to-slate-200 selection:bg-slate-200 selection:text-slate-800">
      <div className="flex items-center justify-center h-screen">
        <div className="w-5/6 sm:w-3/4 md:w-2/5 lg:w-3/5 xl:w-5/6 relative xl:max-w-lg ">
          <h1 className="text-6xl lg:text-8xl text-bold font-chula mb-5 text-slate-900 pb-4">
            Iris & David
          </h1>
          <img src={logo} />
          <p className="text-3xl lg:text-4xl text-slate-700 font-chula pb-4">
            Que sí, que sí...¡Qué nos casamos!
          </p>
          <p className="text-3xl lg:text-4xl text-slate-700 font-chula pb-4">
            Apunta la fecha, el 30 de septiembre del 2023
          </p>

          <div className="pt-5 font-chula">
            <p className="flex items-center justify-center text-2xl text-slate-600 text-center p-4 bg-slate-100 rounded-full shadow-md">
              {timeLeft}
            </p>
            <p className="text-2xl text-slate-800 mt-8">
              Próximamente daremos más información...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
