import Header from "./components/Header/Header";
import "./App.scss";
import Single from "./pages/single/Single";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Single />
    </div>
  );
}

export default App;
