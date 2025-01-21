import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import ExperienceSection from "../components/ExperienceSection"; // Import the ExperienceSection
import EducationSection from "../components/EducationSection";
// Local Data
import SkillsSection from "../components/SkillsSection";
import data from "../data/portfolio.json"
import WorkSection from "../components/WorkSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef(); // Add a ref for the experience section
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const SkillsRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

const handleSkillsScroll = () =>{
  window.scrollTo({
    top: SkillsRef.current.offsetTop,
    left: 0,
    behavior: "smooth",
  })
};
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleExperienceScroll={handleExperienceScroll}
          handleSkillsScroll={handleSkillsScroll} // Pass the new scroll handler
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-40 p-12 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-3xl text-bold">About.</h1>
          <div className="flex flex-col laptop:flex-row items-start laptop:items-center">
            {/* Left Text Section */}
            <div className="flex-1">
              <p className="tablet:m-10 mt-2 text-2xl laptop:text-3xl w-full laptop:w-4/5">
                {data.aboutpara}
              </p>
            </div>

            {/* Right Images Section */}
            <div className="flex-1 mt-10 laptop:mt-0">
              <div className="grid grid-cols-3 gap-4 auto-rows-auto">
                {/* Image 1 */}
                <div className="row-span-2 col-span-2 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f5/cf/d2/f5cfd293571ad2ef5ebeff28f76e6fea.jpg"
                    alt="Gradient Boosting"
                    className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Image 2 */}
                <div className="overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/8e/53/d8/8e53d8e14aa03d7eb4561741ccb85ad7.jpg"
                    alt="Statistical Test"
                    className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Image 3 */}
                <div className="overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/7e/27/d6/7e27d6fad32642b3e75b7ef1c73bfd1f.jpg"
                    alt="Decision Tree Example"
                    className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>





<div ref={workRef}>
      <h1 className="tablet:m-5 text-2xl text-bold">Featured Work.</h1><br></br>
      <WorkSection projects={data.projects} />
    </div>
        {/* <div> */}
        

        <div ref={experienceRef} >
        <h1 className="tablet:m-10 text-2xl text-bold">📈Leveling Up: Knowledge and Experience</h1>
          <ExperienceSection />
        </div>
    
        <div ref={SkillsRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Skills.</h1>
        <SkillsSection />
        </div>

      {/* Other sections */}
      {/* Footer */}
    {/* <div>
    
    
        {/* This button should not go into production */}
        
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        
      </div>
      <Footer />

    </div>
  );
}
