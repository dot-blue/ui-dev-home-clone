import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Logos from "./components/Logos";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Logos />
      <Courses />
    </div>
  );
}

export default App;
