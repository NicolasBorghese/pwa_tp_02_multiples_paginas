import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DestinoDetail from "../../components/DestinoDetail/DestinoDetail";

const Details = () => {
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

    return (
        <div className="h-full bg-gray-300">
            <Header funcionBuscador={null} />
            {jsonData ? (
                <DestinoDetail datosDestino={jsonData}/>
            ) : (
                <div className="mx-40 pt-32 min-h-svh">
                    <p className="my-8 p-10 bg-white text-center text-xl rounded-full">
                        Cargando...
                    </p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Details;
