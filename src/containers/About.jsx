import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section 
    id="about" 
    className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title  */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{opacity:0, width: 0}}
          animate={{opacity:1, width: 200}}
          exit={{opacity:0, width: 0}}
          transition={{delay: 0.4}}
          className="flex items-center gap-5">
           <img src={Leaf1} className="w-6 h-auto object-contain" alt="leaf" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
                About
            </p>
           <img src={Leaf2} className="w-6 h-auto object-contain" alt="leaf" />
        </motion.div>
      </div>

      {/* main content  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
         {/* image section  */}
         <div className="w-full flex items-center justify-center px-8">
            <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
                <img src={about} className="w-full rounded-md h-auto object-contain" alt=""/>
                <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10"></div>
            </div>
         </div>
          {/* text content  */}
          <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
              <p className="text-texlight text-base tracking-wide text-justify">
                  I am a Software Engineer with a passion for building dynamic and user-friendly web applications. My
                  journey in the tech world started with a solid foundation in computer science, which I've built upon
                  through hands-on experience in both trainee and junior software engineer roles.
              </p>
              <p className="text-texlight text-base tracking-wide text-justify">
                  I have a proven track record of contributing to front-end development, leveraging my expertise in
                  HTML, CSS, JavaScript, React, NextJs and Typescript to craft engaging user interfaces. I excel at
                  collaborating with backend teams to ensure seamless integration and optimal performance of web
                  applications. My adaptability is evident in my ability to tailor web projects for various platforms,
                  ensuring a consistent and enjoyable experience for all users.
              </p>
              <p className="text-texlight text-base tracking-wide text-justify">
                  Beyond my core skills, I am a proactive learner, constantly expanding my knowledge base to stay at the
                  forefront of technology. I am currently exploring the realms of Node.js, NestJS, and Python Django,
                  showcasing my commitment to professional development and my eagerness to tackle new challenges.
              </p>
          </div>
      </div>
    </section>
  )
};

export default About;
