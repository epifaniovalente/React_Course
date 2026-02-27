function SocialMidias({text, icon}) {
    return(
        <span className="flex items-center gap-2 p-2 border border-gray-700 rounded-2xl cursor-pointer">
            {icon} {text}
        </span>
    )
}

export default SocialMidias