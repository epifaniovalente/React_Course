import Item from "./Item";
function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <Item marca="BMW" ano_lancamento={1936}/>
        <Item/>
      </ul>
    </>
  );
}

export default List;
