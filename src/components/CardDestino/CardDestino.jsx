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
        <div
            className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:brightness-110 active:brightness-90 border-2 cursor-pointer"
            onClick={onClickHandler}
        >
            <div className="overflow-hidden">
                <img
                    className="w-full transition-transform duration-300 transform hover:scale-110"
                    src={imagen}
                    alt={ciudad}
                />
            </div>
            <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">{ciudad}</div>
                <p className="text-gray-700 text-base">{pais}</p>
            </div>
        </div>
    );
};

export default CardDestino;
