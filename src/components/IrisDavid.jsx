import iris from "../img/iris-web.jpg";
import david from "../img/david-web.jpg";

const IrisDavid = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 pt-9">
      <div className="mb-6 w-5/6 sm:w-3/4 md:w-3/4 lg:w-3/5">
        <p className="text-2xl mb-4">
          Estoy muy seguro que ya conoces a Iris y David, David e Iris.
        </p>
        <p className="text-2xl mb-4">
          Siempre dispuestos a servir un buen musculopez o mal llamado Moscow
          Mule, uno de los 1150 cócteles que tienen en su carta, con una sonrisa
          en el Hygge.
        </p>
        <p className="text-2xl mb-4">
          Bueno, esto de la sonrisa solo se podría aplicar a Iris, cuando está
          por el bar claro...
        </p>
        <p className="text-2xl mb-4">
          Pero si no les pones cara, aquí van unas fotos de ellos...
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 pt-9 gap-8">
          <div>
            <span className="text-xl">El novio</span>
            <img src={david} title="El novio!!" alt="David de pequeño" />
          </div>
          <div>
            <span className="text-xl">La novia</span>
            <img src={iris} title="La novia!!" alt="Iris de pequeña" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrisDavid;
