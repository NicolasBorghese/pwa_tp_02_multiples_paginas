import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DestinoDetail from "../../components/DestinoDetail/DestinoDetail";

const Details = () => {
    const [estadoPagina, setEstadoPagina] = useState(
        <p className="my-8 p-10 bg-white font-bold text-center text-xl rounded-full">
            Cargando...
        </p>
    );
    const [jsonData, setJsonData] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                window.scrollTo(0, 0);
                const params = new URLSearchParams(location.search);
                const paramId = params.get("id");
                const url = `../mocks/destino${paramId}.json`;
                const response = await fetch(url);
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [location.search]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setEstadoPagina(
                <p className="my-8 p-10 bg-white text-red-800 font-bold text-center text-xl rounded-full">
                    La página a la que desea acceder no se encuentra disponible
                </p>
            );
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="h-full bg-gray-300">
            <Header funcionBuscador={null} />
            {jsonData ? (
                <DestinoDetail datosDestino={jsonData} />
            ) : (
                <div className="mx-40 pt-32 min-h-svh">{estadoPagina}</div>
            )}
            <Footer />
        </div>
    );
};

export default Details;
