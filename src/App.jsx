import "./App.css";
import Header from "./components/GPT/Header";
import Footer from "./components/GPT/Footer";
import HelloWord from "./components/HelloWord";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from './components/List'

// const titulo1 = "Plataforma EpiCoder";
// const subtitulo = "Props multiplos";
const aluno = "Zé";
// const src = "https://via.placeholder.com/150";

function App() {
  return (
    <div>
      {/* <Header titulo={titulo1} subtitulo={subtitulo} />
      <Header titulo="Aprendendo React" />
      <h1>Ola, React</h1>
      <p>Meu primeiro componente está funcionando!</p>
      <p>Aprendendo componentes reutilizaveis.</p>
      <Footer></Footer>
      <HelloWord /> */}

      <SayMyName nome="Pingadas" />
      {/* <SayMyName nome="Jaime" />
      <SayMyName nome="Lúcio" />
      <SayMyName nome={aluno} /> */}
      <Pessoa
        foto="https://via.placeholder.com/150"
        nome="Kinavuidi"
        idade="65"
        profissao="Estudante"
      />

      <Frase />
      <List/>
    </div>
  );
}

export default App;
