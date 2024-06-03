import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Home } from "./Home";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

// main component
export function App() {
  return (
    <>
      <LocationProvider>
        <Navbar />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
        </Router>
        <Footer />
      </LocationProvider>
    </>
  );
}

render(<App />, document.getElementById("app"));
