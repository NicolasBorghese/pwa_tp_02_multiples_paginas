import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const LogoHeader = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`${ROUTES.home}?restaurar=${"1"}`);
    };

    return (
        <div
            className="w-60 mr-10 py-auto hover:brightness-125 active:brightness-90"
            onClick={onClickHandler}
        >
            <img
                src="/assets/logoNuevoDestino1.png"
                alt="Logo Nuevo Destino"
            ></img>
        </div>
    );
};

export default LogoHeader;
