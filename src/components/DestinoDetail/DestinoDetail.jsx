import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinoDetail = ({ name, description, images, lenguaje, zonaHoraria, lugaresFamosos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
                <p className="text-lg text-gray-600 mb-6">{description}</p>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Imagen ${index}`} className="w-full h-auto" />
                        </div>
                    ))}
                </Slider>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Detalles</h3>
                    <p><span className="font-bold">Idioma:</span> {lenguaje}</p>
                    <p><span className="font-bold">Zona Horaria:</span> {zonaHoraria}</p>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">Lugares Famosos</h4>
                        <ul className="list-disc list-inside">
                            {lugaresFamosos.map((lugar, index) => (
                                <li key={index} className="text-gray-600">{lugar}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinoDetail;