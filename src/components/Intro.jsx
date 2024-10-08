import { useState, useEffect } from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import Confetti from "react-confetti";

const Intro = () => {
  const [timeLeft, setTimeLeft] = useState("Calculando los días restantes...");
  const weddingDate = new Date("2023-09-30T13:15:00");
  const [isExploding, setIsExploding] = useState(false);

  const [hoursLeft, setHoursLeft] = useState("Calculando...");
  const [minutesLeft, setMinutesLeft] = useState("Calculando...");
  const [secondsLeft, setSecondsLeft] = useState("Calculando...");

  useEffect(() => {
    updateTime();
  }, [timeLeft]);

  useEffect(() => {
    setIsExploding();
    calculateHoursLeft();
    calculateMinutesLeft();
    calculateSecondsLeft();
  }, []);

  const updateTime = () => {
    setInterval(calculateTime, 1000);
    setInterval(calculateHoursLeft, 59000);
    setInterval(calculateMinutesLeft, 59000);
    setInterval(calculateSecondsLeft, 1000);
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

  const calculateHoursLeft = () => {
    let now = new Date().getTime();
    let time = weddingDate - now;
    let hours = Math.floor(time / (1000 * 60 * 60));
    setHoursLeft(hours);
  };
  const calculateMinutesLeft = () => {
    let now = new Date().getTime();
    let time = weddingDate - now;
    let minutes = Math.floor(time / (1000 * 60));
    setMinutesLeft(minutes);
  };

  const calculateSecondsLeft = () => {
    let now = new Date().getTime();
    let time = weddingDate - now;
    let seconds = Math.floor(time / 1000);
    setSecondsLeft(seconds);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-slate-50 to-slate-200 relative">
      <div className="w-5/6 sm:w-3/4 md:w-2/5 lg:w-3/5 xl:w-5/6 xl:max-w-lg ">
        <h1 className="text-6xl lg:text-8xl text-bold font-chula mb-5 text-slate-900 pb-4">
          Iris & David
        </h1>
        <p className="text-3xl lg:text-4xl text-slate-700 pb-4">
          Que sí, que sí...¡Qué nos casamos!
        </p>
        <p className="text-3xl lg:text-4xl text-slate-700 pb-4">
          Apunta la fecha, el 30 de septiembre del 2023
        </p>

        <div className="pt-5 font-chula">
          <p className="flex items-center justify-center text-2xl text-slate-600 text-center p-4 bg-slate-100 rounded-full shadow-md">
            {timeLeft}
          </p>
          <p className="flex text-2xl text-slate-600 pt-4 pb-2">
            Es decir, que quedan: {hoursLeft} horas.
          </p>
          <p className="flex text-2xl text-slate-600 py-2">
            O se puede decir que se casan en {minutesLeft} minutos.
          </p>
          <p className="flex text-2xl text-slate-600 py-2">
            Y si queremos ser superexactos... {secondsLeft} segundos.
          </p>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={600}
          />
          <p className="text-2xl text-slate-800 mt-8">¡Baja que hay más!</p>
        </div>
      </div>
      <div className="flex justify-center mt-10 absolute bottom-4">
        <a href="#donde">
          <AiOutlineArrowDown
            onClick={() => {}}
            size={40}
            className="animate-bounce"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
