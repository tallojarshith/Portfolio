import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import "./styles/main.css"

function App() {
  return (

    <div className="appContainer ">
      <Navbar />
      <div className="appInnerContainer">
        <Landing />
        <About />
      </div>
    </div>

  );
}

export default App;
