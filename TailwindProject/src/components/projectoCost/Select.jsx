function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="font-semibold text-sm mb-2">{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} className="bg-white p-3 outline-none border-none placeholder:text-gray-400">
                <option selected disabled>Selecione uma opção</option>
                {options.map((option) => (
                    <option
                        value={option.id}
                        key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select