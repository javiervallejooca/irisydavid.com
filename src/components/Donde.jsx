import React from "react";

const Donde = () => {
  return (
    <div
      id="donde"
      className="flex flex-col items-center justify-center bg-gray-50 pt-9"
    >
      <div className="mb-6 w-5/6 sm:w-3/4 md:w-2/5 lg:w-3/5 xl:w-5/6 xl:max-w-lg">
        <p className="text-3xl lg:text-4xl text-slate-700 pb-4 mb-4">
          El eventazo será en el casón de la Marquesa, en Las Fraguas.
        </p>
        <p className="text-xl my-4">
          Se trata de un pequeño hotel con una finca preciosa, es allí donde
          haremos la ceremonia civil y donde se celebrará el convite.
        </p>
        <p className="text-2xl my-4">
          Recordad que <strong>la ceremonia empieza a las 13:15hrs</strong>,
          pero Iris, seguramente, llegue unos <del>veinte o treinta</del>{" "}
          minutos tarde...
        </p>
        <p className="text-xl my-4">
          PD: ¡Llevad bañador para tirar a la noche a David a la piscina!
        </p>
        <p className="text-xl mt-4 mb-5">
          El autobús de vuelta corre por nuestra parte. Queremos que os
          desgastéis la suela de los zapatos en la pista de baile a ritmo de...
        </p>
        <p className="text-xl">
          Kitt, Kitt, Kitt, un forro de bolas<br></br>
          Kitt, Kitt, Kitt, ambientador de pino<br></br>
          Kitt, Kitt, Kitt, el cassette del Junco<br></br>
          Kitt, Kitt, Kitt, la foto de las niñas 👏👏👏<br></br>
        </p>
        <p className="text-xl my-4">
          El microbús de <u>Viajes Cantabria</u>{" "}
          <strong>
            sale a las <strong></strong>12:10hrs
          </strong>{" "}
          desde el <strong>intercambiador del Sardinero.</strong>
        </p>
        <p className="text-xl my-4">
          Para volver a Santander, <strong>habrá dos salidas</strong>, la
          primera a las 00:00hrs y la segunda a las 03:00hrs
        </p>
      </div>
    </div>
  );
};

export default Donde;
