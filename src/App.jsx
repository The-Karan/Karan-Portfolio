import { useRef } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  Tech,
  TechCanvas,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const appRef = useRef(null);

  return (
    <div className='relative z-0 bg-primary' ref={appRef}>
      <Navbar />
      <main id='main-content'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </main>
      <Footer />
      <TechCanvas eventSource={appRef} />
    </div>
  );
}

export default App;
