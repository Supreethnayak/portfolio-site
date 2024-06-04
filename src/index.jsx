import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Home } from "./Home";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// main component
export function App() {
  return (
    <>
      <LocationProvider>
        <Navbar />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Router>
        <Footer />
      </LocationProvider>
    </>
  );
}

render(<App />, document.getElementById("app"));
