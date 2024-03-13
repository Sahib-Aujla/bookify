import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient></ButtonGradient>
    </>
  );
};

export default App;
