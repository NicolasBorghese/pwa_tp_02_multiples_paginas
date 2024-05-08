const CardDestino = ({ id, imagen, ciudad, pais, funcion }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:brightness-125 active:brightness-90 border-2" onClick={() => funcion(id)}>
      <img className="w-full" src={imagen} alt={ciudad} />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{ciudad}</div>
        <p className="text-gray-700 text-base">
          {pais}
        </p>
      </div>
    </div>
  );
};

export default CardDestino;