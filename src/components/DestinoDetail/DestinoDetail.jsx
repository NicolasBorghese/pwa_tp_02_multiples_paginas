import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinoDetail = ({
    name,
    description,
    images,
    lenguaje,
    zonaHoraria,
    lugaresFamosos,
}) => {
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
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{description}</p>
                <div className=" w-3/5 content-center mx-auto">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className=" h-min w-min rounded-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Imagen ${index}`}
                                    className="rounded-lg h-auto w-full transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Detalles
                    </h3>
                    <p>
                        <span className="font-bold">Idioma:</span> {lenguaje}
                    </p>
                    <p>
                        <span className="font-bold">Zona Horaria:</span>{" "}
                        {zonaHoraria}
                    </p>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                            Lugares Famosos
                        </h4>
                        <ul className="list-disc list-inside">
                            {lugaresFamosos.map((lugar, index) => (
                                <li key={index} className="text-gray-600">
                                    {lugar}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinoDetail;
