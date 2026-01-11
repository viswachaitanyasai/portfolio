import { Navbar } from "./components";
import { Home, About, Projects, Experience, Skills, Education, Contact, Footer } from "./containers";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;