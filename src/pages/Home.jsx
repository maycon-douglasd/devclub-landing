import Hero from "../components/sections/Hero/Hero";
import Manifesto from "../components/sections/Manifesto/Manifesto";
import About from "../components/sections/About/About";
import Journey from "../components/sections/Journey/Journey";

function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <About />
      <Journey />
    </main>
  );
}

export default Home;