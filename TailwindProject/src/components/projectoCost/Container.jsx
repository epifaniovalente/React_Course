function Container(props) {
    return (
        <main className="max-w-7xl min-h-screen bg-gray-50 flex justify-between m-auto flex-wrap">
            {props.children}
        </main>
    )
}

export default Container;