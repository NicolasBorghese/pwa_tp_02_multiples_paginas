import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
            <div className="min-h-screen">
                {jsonData && jsonData.name && <p>{jsonData.name}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default Details;
