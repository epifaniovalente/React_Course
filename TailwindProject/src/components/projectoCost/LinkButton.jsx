import { Link } from "react-router-dom"

function LinkButton({ to, text }) {
    return (
        <Link to={to} className="bg-gray-900 text-gray-300 py-2 px-4 transition hover:text-yellow-600 font-medium">
            {text}
        </Link>
    )
}

export default LinkButton