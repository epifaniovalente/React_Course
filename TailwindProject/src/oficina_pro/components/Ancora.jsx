import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function Ancora({text}) {
    return(
        <span className="text-cyan-500 font-medium text-sm flex items-center gap-0.5 justify-center mt-4">
            {text}
            <FaArrowRight className="text-xs"/>
        </span>
    )
}

export default Ancora