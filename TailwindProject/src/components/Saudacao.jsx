function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Ola ${algumNome}, como está?`;
    }
    return (
        <div>

            {nome &&

                <p>{gerarSaudacao(nome)}</p>
            }
        </div>
    )
}

export default Saudacao