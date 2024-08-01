import "./App.css";
import Filho from "./components/Filho";
import Pai from "./components/Pai";
// import Saudacao from "./components/Saudacao";

function App() {
  return (
    <div className="App">
      {/* <Saudacao tipo="Timpo" nome="Rei" /> */}
      <Pai nome="Paulo" sobrenome="Bosta">
        <Filho nome="Empresário" />
        <Filho nome="Empresário 1" />
        <Filho nome="Empresário 2" sobrenome="de MERDA" />
      </Pai>
    </div>
  );
}

export default App;
