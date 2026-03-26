import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { ROUTES } from "../../const/routes";

const InputBuscador = ({ funcionLeerInput }) => {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const valor = inputRef.current.value;

        if (funcionLeerInput != null) {
            funcionLeerInput(valor);
        } else {
            navigate(`${ROUTES.home}?inputBuscar=${valor}&restaurar=${"0"}`);
        }
    };

    return (
        <form className="w-full">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="search"
                    id="default-search"
                    className="block w-full p-2 ps-3 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Destino..."
                    required
                />
                <button
                    className="absolute inset-y-0 end-0 flex items-center px-3 text-gray-500 hover:text-blue-600 focus:outline-none"
                    onClick={onSubmitHandler}
                    aria-label="Buscar"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default InputBuscador;
