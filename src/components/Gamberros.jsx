import { useState } from "react";
import cracks from "../img/repuesto.jpg";
import autor from "../img/nahum.jpg";

const Gamberros = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center pt-9">
      <div className="mb-6 w-5/6 sm:w-3/4 md:w-3/4 lg:w-3/5">
        <p className="text-2xl mb-4">
          ¡Todas las personas que lean esto querrán que Iris y David se tomen un
          buen descanso después de su boda!
        </p>
        <p className="text-xl mb-4">Pero tranquilo todo el mundo...</p>
        <p className="text-xl mb-4">
          En el caso de que se vayan muchos días de vacaciones... Fran, que
          tiene mucho problemas técnicos en su bar, y un servidor (el que ha
          hecho la web) nos ofrecemos a currar.
        </p>
        <img
          src={cracks}
          title="Los mejores camareros que han pisado el Hygge"
          alt="Los mejores camareros que han pisado el Hygge"
        />
        <p className="text-xl text-center">
          PD: <b onClick={() => setDisplay(!display)}>Nahúm</b> se ha molestado
          ya que no aparece como autor de la foto (haz click en su nombre y lo
          conocerás)
        </p>
        {display && (
          <div className="flex justify-center">
            {" "}
            <img src={autor} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gamberros;
