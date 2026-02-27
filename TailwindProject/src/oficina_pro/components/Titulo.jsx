function Titulo({text, tamanho}) {
    return(
        <h3 className={`${tamanho} text-xl text-gray-50 font-medium`}>
            {text}
        </h3>
    )
}

export default Titulo