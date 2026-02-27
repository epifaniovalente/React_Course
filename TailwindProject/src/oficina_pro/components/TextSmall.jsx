function TextSmall({ text, color, radios, background, padding }) {
    return (
        <p className={`${color} ${background} ${padding} ${radios} text-xs font-medium w-fit`}>
            {text}
        </p>
    )
}

export default TextSmall