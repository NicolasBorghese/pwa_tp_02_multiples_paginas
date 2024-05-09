import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import DisplayDestinos from "../../components/DisplayDestinos/DisplayDestinos";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [destinosJson, setDestinosJson] = useState([]);
    const [destinosFiltradosJson, setDestinosFiltradosJson] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchDestinos = async () => {
            try {
                window.scrollTo(0, 0);
                const response = await fetch("../mocks/destinos.json");
                const data = await response.json();
                setDestinosJson(data);
                setDestinosFiltradosJson(data);

                const params = new URLSearchParams(location.search);
                const paramRestaurar = params.get("restaurar");
                const paramInputBuscar = params.get("inputBuscar");
                if (
                    paramRestaurar === "1" ||
                    (paramRestaurar === null && paramInputBuscar === null)
                ) {
                    navigate(ROUTES.home);
                } else {
                    filtrarDestinos(paramInputBuscar);
                    navigate(`${ROUTES.home}?inputBuscar=${paramInputBuscar}`);
                }
            } catch (error) {
                console.error("Error al obtener los destinos:", error);
            }
        };
        fetchDestinos();
    }, [location.search]);

    const filtrarDestinos = (valor) => {
        const destinosFiltrados = destinosJson.filter(
            (destinoJson) =>
                destinoJson.ciudad
                    .toLowerCase()
                    .includes(valor.toLowerCase()) ||
                destinoJson.pais.toLowerCase().includes(valor.toLowerCase())
        );

        setDestinosFiltradosJson(() => {
            return destinosFiltrados;
        });
    };

    return (
        <div className="h-full bg-gray-300">
            <Header funcionBuscador={filtrarDestinos} />
            <div className="min-h-screen">
                <Banner />
                <DisplayDestinos arregloDestinos={destinosFiltradosJson} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
