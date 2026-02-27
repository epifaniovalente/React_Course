function Paragrafo({ text,color,weight,tipoLetra }) {
    return (
        <p className={`${color} ${weight} text-sm ${tipoLetra}`}>
            {text}
        </p>
    )
}

export default Paragrafo