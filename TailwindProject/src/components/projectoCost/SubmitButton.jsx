function SubmitButton({ text }) {
    return (
        <div>
        <button className=" bg-gray-900 text-gray-300 py-2 px-4 transition hover:text-yellow-600 font-medium outline-none border-none cursor-pointer">{text}</button>
        </div>
    )
}

export default SubmitButton