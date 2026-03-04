import { useState } from "react";
import dog_img from "../images/img_dog.jpg";
const user = {
    name: 'Cidadão',
    profissao: 'programador',
    foto: dog_img,
    fotoSize: 90
}

function MyApp() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }

    return (
        <section>
            <h3>Contadores que acualizam juntos</h3>
            <UserButton count={count} onClick={handleClick} />
            <UserButton count={count} onClick={handleClick} />
        </section>
    )
}

function UserButton({ count, onClick }) {

    return (
        <button onClick={onClick} className="bg-emerald-700 text-gray-50 p-2 rounded-2xl cursor-pointer active:scale-90 transition ease-in-out duration-300" >
            Clicado {count} vezes
        </button>
    )
}

export default function InicioRapido() {
    const [isLogged, setIsLogged] = useState(false)
    let content
    if (isLogged) {
        content = 'Usuario Logado com sucesso'
    } else {
        content = 'Erro! tente acessar novamente'
    }

    const products = [
        { title: "Teclado", id: 1 },
        { title: "Mouse", id: 2 },
        { title: "Gabinete", id: 3 },
        { title: "Monitor", id: 4 }
    ]

    const listItens = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    )

    const shoppingList = [
        { title: 'Maracuja', isFruit: true, id: 1 },
        { title: 'Alho', isFruit: false, id: 2 },
        { title: 'Repolho', isFruit: false, id: 3 },
        { title: 'Pessigo', isFruit: true, id: 4 },
        { title: 'Cebola', isFruit: false, id: 5 }
    ]

    const listShop = shoppingList.map(productShop =>
        <li key={productShop.id} style={{ color: productShop.isFruit ? 'magenta' : 'darkgreen' }}>
            {productShop.title}
        </li>
    )



    return (
        <section className="flex flex-col gap-5">
            <article className="bg-white rounded-2xl">

                <h1 className="text-2xl font-bold text-cyan-900">
                    Sobre {user.name}
                </h1>
                <img src={user.foto} alt={user.name} style={{ width: user.fotoSize, height: user.fotoSize }} />
            </article>

            <article className="bg-white rounded-2xl p-2">

                {/* Condição */}
                <h1 className="text-2xl font-bold text-cyan-900">
                    Renderização Condicional
                </h1>
                {isLogged ? (
                    <p>Ola! <strong>{user.name}</strong> Bem-vindo ao dashboard</p>
                ) : (
                    <p>Lamentamos! <strong>{user.name}</strong>, Tente acessar novamente.</p>
                )}
            </article>

            <article className="bg-white rounded-2xl p-2">

                {/* Renderizar Lista */}

                <h1 className="text-2xl font-bold text-cyan-900">
                    Renderização de Lista
                </h1>
                <h2 className="text-xl font-semibold text-cyan-900">
                    Lista A
                </h2>
                <ul className="">
                    {products.map(product => (
                        <li key={product.id} >
                            id nº: {product.id} - {product.title}
                        </li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold text-cyan-900">
                    Lista B
                </h2>

                <ul className=""> {listItens} </ul>

                <h2 className="text-xl font-semibold text-cyan-900">
                    Lista C - por categoria(fruta/legume)
                </h2>

                <ul>
                    {listShop}
                </ul>
            </article>

            <article className="bg-white rounded-2xl p-2">
                {/* Respondendo a eventos */}

                <h2 className="text-2xl font-bold text-cyan-900">
                    Responder a eventos
                </h2>
                <UserButton/>
                <UserButton/>
            </article>

            <article className="bg-white rounded-2xl p-2">
                {/* Usando Hooks */}

                <h2 className="text-2xl font-bold text-cyan-900">
                    Usando Hooks
                </h2>
                <MyApp />
            </article>
        </section>
    )
}