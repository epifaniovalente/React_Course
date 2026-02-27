function Botao({ text, type, acao, color, background, width, display }) {
    return (
        <button type={type} onClick={acao} className={`${color} ${background} ${width} ${display} rounded-2xl text-center font-medium p-2.5 cursor-pointer active:scale-95 ease-in-out duration-300`}>
            {text}
        </button>
    )
}

export default Botao