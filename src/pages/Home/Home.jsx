import { useState } from "react";
import { useEffect } from "react"
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import DisplayDestinos from "../../components/DisplayDestinos/DisplayDestinos";
import CardDestino from "../../components/CardDestino/CardDestino";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [destinosJson, setDestinosJson] = useState([]);
    const [destinosFiltradosJson, setDestinosFiltradosJson] = useState([]);

    useEffect(() => {
      const fetchDestinos = async () => {
        try {
          const response = await fetch("../mocks/destinos.json");
          const data = await response.json();
          setDestinosJson(data);
          setDestinosFiltradosJson(data);
        } catch (error) {
          console.error("Error al obtener los destinos:", error);
        }
      };
      fetchDestinos();
    }, []);

    const filtrarDestinos = (valor) => {
      const destinosFiltrados =
        destinosJson.filter(destinoJson => destinoJson.ciudad.toLowerCase().includes(valor.toLowerCase()) ||
        destinoJson.pais.toLowerCase().includes(valor.toLowerCase()));
      
      setDestinosFiltradosJson(() => {
          return destinosFiltrados;
      });
    };

    return (
        <div className="h-full bg-gray-300">
          <Header funcionBuscador={ filtrarDestinos } />
          <div className="min-h-screen">
            <Banner />
            <DisplayDestinos arregloDestinos={ destinosFiltradosJson }/>
          </div>
          <Footer />
        </div>
    );
};

export default Home;
