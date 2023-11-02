import React from "react";
import { About, Contact, Header, Home, Projects, ServiceCount, Skills } from './';

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 overflow-hidden">
        {/* particles container */}  

        {/* header */}
        <Header />

        {/* home container */}
        <Home />

        {/* services count cards  */}
        <ServiceCount />

        {/* about container */}

        <About />
        {/* skills container */}

        <Skills />
        {/* projects container */}

        <Projects />
        {/* contact container */}
        
        <Contact />
        {/* footer container */}
    </div>
  );
};

export default App;
