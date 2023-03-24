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
          Mule, entre otros 1150 cócteles, con una sonrisa en el Hygee.
        </p>
        <p className="text-2xl mb-4">
          Bueno, esto de la sonrisa solo se podría aplicar para Iris, cuando
          está por el bar claro...
        </p>
        <div className="flex items-center justify-center bg-gray-100 pt-9 gap-8">
          <div>
            <img src={david} title="El novio!!" alt="David de pequeño" />
            <span className="text-xl">El novio</span>
          </div>
          <div>
            <img src={iris} title="La novia!!" alt="Iris de pequeña" />
            <span className="text-xl">La novia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrisDavid;
