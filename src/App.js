import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-secondary h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll flex flex-col">
      <Header />
      <About />
      <Skills />
      <Projects />
      {/* <Contacts /> */}
    </div>
  );
}

export default App;
