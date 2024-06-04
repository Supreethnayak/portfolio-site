import "./index.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export function Home() {
  return (
    <>
      <body id="home" class="relative">
        <a id="top"></a>
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </body>
    </>
  );
}
