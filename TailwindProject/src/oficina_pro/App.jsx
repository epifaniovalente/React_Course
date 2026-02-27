import Rodape from "./components/Footer";
import Blog from "./components/Blog";
import Galeria from "./components/Galeria";
import Historico from "./components/Historico_cliente";
import Home from "./components/Home";
import ServicosPremium from "./components/ServicosPremium";
import Agendamento_Online from "./components/Agendamento_Online";

function App() {
    return (
        <section className="min-h-screen bg-slate-950 text-gray-600 font-sans">
            <Home/>
            <ServicosPremium/>
            <Agendamento_Online/>
            <Historico/>
            <Galeria/>
            <Blog/>
            <Rodape/>
        </section>
    )
}

export default App