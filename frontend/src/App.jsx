import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  
  
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient></ButtonGradient>
      <Hero />
      <Benefits showAll={false} />
      <Contact />
    </>
  );
};

export default App;
