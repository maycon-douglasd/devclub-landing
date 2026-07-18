import Hero from "../components/sections/Hero/Hero";
import Manifesto from "../components/sections/Manifesto/Manifesto";
import About from "../components/sections/About/About";
import Journey from "../components/sections/Journey/Journey";
import Projects from "../components/sections/Projects/Projects";
import Results from "../components/sections/Results/Results";

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <Journey />
      <Projects />
      <Results />
    </>
  );
}

export default Home;