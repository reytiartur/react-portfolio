import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import TopButton from "./components/TopButton";
import { createRef } from "react";

function App() {
  const scrollRef = createRef()

  return (
    <div className="App relative bg-secondary h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll flex flex-col">
      <div ref={scrollRef} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <TopButton ref={scrollRef} />
    </div>
  );
}

export default App;
