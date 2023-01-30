import elora from "../img/elora.jpg";

const Elora = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 pt-9">
      <div className="mb-6 w-5/6 sm:w-3/4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-100 md:w-1/2 flex items-center justify-center">
            <p className="text-3xl md:text-5xl break-words">
              ¡El día de nuestra boda, Elora estará controlando (con su habitual
              alegría) que todo lo pase muy muy bien!
            </p>
          </div>
          <div className="w-100 md:w-1/2">
            <img src={elora} alt="Elora" title="Elora 😍" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elora;
