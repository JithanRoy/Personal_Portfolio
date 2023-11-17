import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section 
    id="skills" 
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
                skills
            </p>
           <img src={Leaf2} className="w-6 h-auto object-contain" alt="leaf" />
        </motion.div>
      </div>

      {/* main content  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* text content  */}
         <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
                    My Skills & work Experience
                </p>
                <p className="text-texlight text-base tracking-wide text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius recusandae! Dicta, fuga optio dignissimos odio asperiores neque molestias minus quos accusantium sequi iure nulla tempora, eveniet quis delectus odit?
                </p>
                <p className="text-texlight text-base tracking-wide text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius recusandae! Dicta, fuga optio dignissimos odio asperiores neque molestias minus quos accusantium sequi iure nulla tempora, eveniet quis delectus odit?
                </p>
                <p className="text-texlight text-base tracking-wide text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius recusandae! Dicta, fuga optio dignissimos odio asperiores neque molestias minus quos accusantium sequi iure nulla tempora, eveniet quis delectus odit?
                </p>
            </div>

          {/* image section  */}
          <div className="w-full flex md:flex-col gap-4 items-center justify-center px-8">
              <SkillCard skill={"HTML 5"} percentage={"90%"} color={"#FF3F3F"} move={true}/>
              <SkillCard skill={"CSS 3"} percentage={"70%"} color={"blue"}/>
              <SkillCard skill={"JAVASCRIPT"} percentage={"80%"} color={"green"} move={true}/>
              <SkillCard skill={"React"} percentage={"70%"} color={"yellow"}/>
          </div>
      </div>
    </section>
    )
};

export default Skills;
