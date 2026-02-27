function Input({ text, type, name, placeholder, value, handleOnChange }) {
    return (
        <div className="flex flex-col gap-1 ">
            <label htmlFor={name} className="text-sm text-gray-200 font-medium">
                {text}
            </label>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleOnChange} className="text-sm outline-none border-2 border-gray-800 py-1.5 px-2.5 rounded-xl text-gray-300 bg-slate-800/20 placeholder:text-gray-500 focus-within:bg-gray-800/10"
            />
        </div>
    )
}

export default Input