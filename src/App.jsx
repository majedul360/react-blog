import Header from "./components/Header/Header";
import "./App.scss";
import Settings from "./pages/settings/Settings";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Settings />
    </div>
  );
}

export default App;
