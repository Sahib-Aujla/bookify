import Header from "./components/Header";
import Benefits from "./components/Benefits";
import { heroBackground } from "./assets";
const Explore = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header></Header>
      </div>
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={2400}
              alt="hero"
            />
          </div>


      <Benefits showAll={true} />
    </>
  );
};

export default Explore;
