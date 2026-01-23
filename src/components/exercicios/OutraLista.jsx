function OutraLista({ itens }) {

    return (
        <div>
            <h3>Minha lista de Itens</h3>
            {
                itens.length > 0 ? (

                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <P>A Lista encontra-se empty</P>
                )
            }
        </div>
    )
}

export default OutraLista