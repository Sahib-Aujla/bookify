import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useState } from "react";
import { useRef } from "react";
import { useSendBookMutation } from "../store/apiSlice";
const GetBookCard = ({ id }) => {
  const parallaxRef = useRef(null);
  const [Email, setEmail] = useState("");
  const [sendBook] = useSendBookMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      sendBook({ Email, id });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Get the book&nbsp;Books&nbsp; for {` `}
            <span className="inline-block relative">
              Free{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Please enter the email and the book will be delivered to you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email*"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-center w-full">
                <Button type="submit" className="hidden lg:flex w-96">
                  Send Message
                </Button>
              </div>
          </form>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default GetBookCard;
