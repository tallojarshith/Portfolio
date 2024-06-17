
import About from "./components/About";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./styles/main.css"

function App() {
  return (


    <div className="appContainer">
      <Navbar />
      <div className="pageLength"></div>
      <div className="appInnerContainer">
        <Landing />
        <About />
        <Projects />
        <Experience />
        <Education />
        <div className="footer">

        </div>
      </div>

    </div>


  );
}

export default App;
