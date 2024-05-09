import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const CardDestino = ({ id, imagen, ciudad, pais }) => {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState(id);

  const onClickHandler = () => {
    navigate(`${ROUTES.details}?id=${idCard}`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:brightness-125 active:brightness-90 border-2" onClick={onClickHandler}>
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