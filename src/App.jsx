import Header from "./components/Header/Header";
import "./App.scss";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Home className="home" />
    </div>
  );
}

export default App;
