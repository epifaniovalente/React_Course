function Botao({ text, type, color, background, width, display }) {
    return (
        <button type={type} className={`${color} ${background} ${width} ${display} rounded-2xl text-center font-medium p-2.5 cursor-pointer active:scale-95 ease-in-out duration-300`}>
            {text}
        </button>
    )
}

export default Botao