import "./App.css";

const Card = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>{props.name}</h2>
      <h3>{props.class}</h3>
    </div>
  );
};

function App() {
  return (
    <>
      <Card name="Digbijaya" class="PG"/>
    </>
  );
}

export default App;
