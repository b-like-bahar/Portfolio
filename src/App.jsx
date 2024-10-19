import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.scss'

function App() {

  return (
    <>
    <Header />
    <Home />
    <About />
    <Projects />
    <Skills />
    <div className="contact-footer-wrapper">
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App
