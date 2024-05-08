import { useState } from "react";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {ROUTES} from "../../const/routes";
import Footer from "../../components/Footer/Footer";

const Details = () => {

    const [jsonData, setJsonData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `../mocks/destino${id}.json`;
        const response = await fetch(url);
        const data = await response.json();
        setJsonData(data);
      } 
      catch (error) {
        console.error(error);
      }
    };
    fetchData();
    }, [id]);
    

    
    return(
        <div className="h-full bg-gray-300">
            <div className="min-h-screen">
            {jsonData && jsonData.name && <p>{jsonData.name}</p>}
            </div>
            <Footer/>
        </div>
    );
}

export default Details;