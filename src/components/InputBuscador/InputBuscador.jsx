const InputBuscador = ({ funcionLeerInput }) => {
    const onChangeHandler = (event) => {
        let valor = event.target.value;
        funcionLeerInput(valor);
    };

    return (
      <div className="flex w-full flex-wrap items-stretch">
        <input
            className={"w-full px-4 py-2 rounded-full border-2 border-amber-400 focus:outline-none focus:border-blue-700 focus:border-2"}
            onChange={onChangeHandler}
            type="text"
            placeholder="Buscar..."
        ></input>
      </div>
    );
};

export default InputBuscador;