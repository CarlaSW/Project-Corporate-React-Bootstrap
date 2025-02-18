import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Header id="header" />
      <Hero />
      <About />
      <Services />
      <Works />
    </div>
  );
}

export default App;
