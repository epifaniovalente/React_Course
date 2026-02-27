import Paragrafo from "./Paragrafo";
import TextSmall from "./TextSmall";

function BoxServices({dataRealizadas,tipoServicos,statusServicos}) {
    return(
        <div className="bg-slate-950 rounded-xl p-2 border border-gray-700/400">
            <TextSmall text={dataRealizadas} color="text-gray-500"/>
            <Paragrafo text={tipoServicos} color="text-gray-100"/>
            <TextSmall text={statusServicos} color="text-green-600"/>
        </div>
    )
}

export default BoxServices