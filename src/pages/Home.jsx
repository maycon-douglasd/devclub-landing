import Hero from "../components/sections/Hero/Hero";
import Manifesto from "../components/sections/Manifesto/Manifesto";
import About from "../components/sections/About/About";
import Journey from "../components/sections/Journey/Journey";
import Projects from "../components/sections/Projects/Projects";
import Results from "../components/sections/Results/Results";
import Tutors from "../components/sections/Tutors/Tutors";
import Evolution from "../components/sections/Evolution/Evolution";
import FAQ from "../components/sections/FAQ/FAQ";
import CTA from "../components/sections/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <Journey />
      <Projects />
      <Results />
      <Tutors />
      <Evolution />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;