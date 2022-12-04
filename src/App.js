import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import TopButton from "./components/TopButton";
import { useRef, useState } from "react";

function App() {
  const scrollRef = useRef()
  const [scrollTopPos, setScrollTopPos] = useState(0)
  
  const handleScroll = () => {
    setScrollTopPos(document.querySelector('.App').scrollTop);
  };


  return (
    <div onScroll={handleScroll} className="App scroll-smooth relative bg-secondary h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll flex flex-col">
      <div ref={scrollRef} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <TopButton scrollTopPos={scrollTopPos} ref={scrollRef} />
    </div>
  );
}

export default App;
