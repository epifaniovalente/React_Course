import { useState } from "react"
import  scollbarList from './data.jsx';

export default function Code1_memoria() {
    let index = 0;

    function handleClick() {
        index = index +1
    }

    let scroll = scollbarList[index]

    return(
        <section  className="flex flex-col gap-5 text-gray-700">
            <article className="bg-white rounded-2xl">

            <button onClick={handleClick}>
                next
            </button>

            <h2>
                <li>{scollbarList.name} </li>
                by {scollbarList.artist}
            </h2>
            <h3>
                ({index+1} of {scollbarList.length})
            </h3>
            <img src={scollbarList.profile} alt={scollbarList.alt} />
            <p>
                {scollbarList.description}
            </p>
            </article>
        </section>
    )
}