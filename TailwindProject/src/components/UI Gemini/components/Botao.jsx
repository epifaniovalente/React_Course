function Botao({text, color, onClick}) {
    return(
        <button type="button" onClick={onClick} className={`${color} text-gray-800 text-center p-2 rounded-lg font-medium`}>
            {text}
        </button>
    )
}

export default Botao