import Header from "./components/Header/Header";
import "./App.scss";
import Registar from "../src/pages/registar/Registar";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Registar />
    </div>
  );
}

export default App;
