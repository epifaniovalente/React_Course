function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="font-semibold text-sm mb-2">{text}:
            </label>
            <input type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={handleOnChange}
                value={value}
                className="bg-white p-3 outline-none border-none placeholder:text-gray-400"
            />
        </div>
    )
}

export default Input