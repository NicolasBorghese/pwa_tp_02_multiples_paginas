const Banner = () => {
    return (
        <div className="relative">
            <img
                src="/assets/Banner01.png"
                alt="Banner página"
                className="w-full"
            ></img>
            <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-center text-amber-400 text-4xl font-bold rounded-full bg-slate-900 bg-opacity-80 p-4">
                    ¡Elegí el destino de tu próximo viaje!
                </p>
            </div>
        </div>
    );
};

export default Banner;
