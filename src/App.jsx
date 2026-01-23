import "./App.css";
import OutraLista from "./components/OutraLista";
// import OutraLista from "./components/exercicios/OutraLista";
// const src = "https://via.placeholder.com/150";
// const user = "Maria";

function App() {

  const meusItens = ['Headphone', 'Keyboard', 'Phone', 'CableUSB']

  return (
    <div>
      <h2>Renderização de Lista</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      {/* <OutraLista itens={meusItens} /> */}
    </div>
  );
}

export default App;
