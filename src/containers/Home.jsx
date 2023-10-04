import React from "react";
import { AniimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter } from "../components";

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* content section */}
          <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
             <h2 className="text-3xl lg:text-4xl text-texlight">
               Hello, It's me
               <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
               {" "}
                  Jithan Roy
                </span>
             </h2>

             {/* typewritter */}
             <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
                And I'm{" "}
                <HeroTypeWritter 
                  words={["a Developer..", "a Project Manager..", "a Freelanzer.."]}
                  speed={100}
                />
             </h2>

             <p className="text-base text-texlight mt-6 text-center lg:text-left">
                Junior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS OOP, JavaScript, C++, MySQL. Strong background in project management and customer relations.
             </p>
          </div>

          {/* hero image */}
          <div className="w-full h-full flex items-start justify-center lg:items-center">
              <motion.img 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                src={Hero}
                className="w-auto h-auto object-contain"
              />
          </div>
        </div>
    </section>
  )
};

export default Home;
