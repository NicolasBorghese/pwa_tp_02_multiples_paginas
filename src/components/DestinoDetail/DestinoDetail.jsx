import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BotonPdfDetalles from "../BotonPdfDetalles/BotonPdfDetalles";

const DestinoDetail = ({ datosDestino }) => {
    const [numeroImagenCentral, setNumeroImagenCentral] = useState(0);

    //Función para dar estilos a la flecha izquierda del carrusel
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "black",
                    borderRadius: 100,
                }}
                onClick={onClick}
            />
        );
    }

    //Función para dar estilos a la flecha derecha del carrusel
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "black",
                    borderRadius: 100,
                }}
                onClick={onClick}
            />
        );
    }

    //Parámetros del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        afterChange: (i) => setNumeroImagenCentral(i),
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-32 mx-40 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex mb-4">
                    <img
                        src={datosDestino.imagenPrincipal}
                        alt={`Imagen miniatura`}
                        className="rounded w-28 mr-3"
                    />
                    <h2 className="text-3xl font-bold align-middle text-black my-auto">
                        {datosDestino.ciudad}
                    </h2>
                </div>
                <p className="text-lg text-black mb-6">
                    {datosDestino.descripcion}
                </p>
                <div className=" w-3/5 content-center mx-auto mb-6">
                    <Slider {...settings}>
                        {datosDestino.imagenes.map((imagen, index) => (
                            <div
                                key={index}
                                className=" h-min w-min rounded-lg overflow-hidden"
                            >
                                <img
                                    src={imagen}
                                    alt={`Imagen ${index}`}
                                    className="rounded-lg h-auto w-full transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="mt-10 flex justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Información</h3>
                        <p>
                            <span className="font-bold">Pais:</span>{" "}
                            {datosDestino.pais}
                        </p>
                        <p>
                            <span className="font-bold">Idioma:</span>{" "}
                            {datosDestino.lenguaje}
                        </p>
                        <p>
                            <span className="font-bold">Zona Horaria:</span>{" "}
                            {datosDestino.zonaHoraria}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Lugares Famosos
                        </h3>
                        <ul className="list-disc list-inside">
                            {datosDestino.lugaresFamosos.map((lugar, index) => (
                                <li key={index} className="text-black">
                                    {lugar}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <BotonPdfDetalles
                        datosDestino={datosDestino}
                        numeroImagenCentral={numeroImagenCentral}
                    />
                </div>
            </div>
        </div>
    );
};

export default DestinoDetail;
