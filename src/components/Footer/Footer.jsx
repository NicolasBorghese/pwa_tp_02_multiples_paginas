import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={"bg-slate-900 text-white flex flex-col justify-center items-center p-4 h-auto"}>
            <div className={"text-center mb-6"}>
                <p className={"mb-4 font-bold"}>&copy; 2024 Grupo 04 PWA</p>
                <ul>
                  <li><p>Borghese Nicolás FAI-997</p></li>
                  <li><p>Blanco Julián FAI-3858</p></li>
                </ul>
            </div>
            <div className={"flex space-x-4"}>
                <a href="https://github.com/NicolasBorghese/pwa_tp_02_multiples_paginas" className={"text-white hover:text-gray-400"}>
                    <FaGithub size={24} />
                </a>
                <a href="#" className={"text-white hover:text-gray-400"}>
                    <FaInstagram size={24} />
                </a>
                <a href="#" className={"text-white hover:text-gray-400"}>
                    <FaTwitter size={24} />
                </a>
                <a href="#" className={"text-white hover:text-gray-400"}>
                    <FaFacebook size={24} />
                </a>
            </div>
            <div className={"mt-4"}>
                <p>Síguenos en nuestras redes sociales para mantenerte al tanto de nuestras novedades y eventos.</p>
            </div>
        </footer>
    );
};

export default Footer;