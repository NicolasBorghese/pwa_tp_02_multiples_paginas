import CardDestino from "../CardDestino/CardDestino";

const DisplayDestinos = ({ arregloDestinos, onClickViewDetails }) => {

  let contenidoDisplay = 
  <div className="mx-40 my-8 p-10 bg-white text-center text-xl  rounded-full">
    Lo sentimos, no hay destinos que coincidan con lo que está buscando
  </div>

  if(arregloDestinos.length > 0){
    contenidoDisplay =
    <div className="mx-40 my-8">
      <div className="flex flex-wrap -mx-4">
        {arregloDestinos.map((destinoEnColeccion) => (
          <div key={destinoEnColeccion.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <CardDestino
              id={destinoEnColeccion.id}
              imagen={destinoEnColeccion.imagen}
              ciudad={destinoEnColeccion.ciudad}
              pais={destinoEnColeccion.pais}
              funcion={onClickViewDetails}
            />
          </div>
        ))}
      </div>
    </div>
  }

  return (
    <div>
      {contenidoDisplay}
    </div>
  );
};
export default DisplayDestinos;