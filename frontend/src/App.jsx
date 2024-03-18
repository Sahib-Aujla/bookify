import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
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
      <Benefits />
    </>
  );
};

export default App;
