function Select({ text, option, value, handleOnChange, name }) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm text-gray-200 font-medium">
                {text}
            </label>
            <select name={name} id={name} value={value} onChange={handleOnChange}
            className="text-sm outline-none border-2 border-gray-800 py-1.5 px-2.5 rounded-xl text-gray-300 bg-slate-800/20 placeholder:text-gray-500"
            >
                <option selected disabled>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select