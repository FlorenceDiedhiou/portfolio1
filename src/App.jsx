import "./styles/style.css";
import Navbar  from "./components/Navbar";
import Accueil from "./pages/Accueil";
import About   from "./pages/About";
import Contact from "./pages/Contact";
import Skills  from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer  from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;