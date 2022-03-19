import Header from "./components/Header/Header";
import "./App.scss";
import Write from "./pages/write/Write";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Write />
    </div>
  );
}

export default App;
