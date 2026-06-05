import { lazy, Suspense, useEffect, useRef } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { useEnhancedVisuals } from "./hooks/useEnhancedVisuals";
import { useInViewport } from "./hooks/useInViewport";
import { getSectionIdFromPath, scrollToSection } from "./utils/navigation";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  const appRef = useRef(null);
  const contactRegionRef = useRef(null);
  const enhancedVisuals = useEnhancedVisuals({ minWidth: 0 });
  const showContactStars = useInViewport(contactRegionRef, "500px");

  useEffect(() => {
    const handleRouteChange = () => {
      const sectionId = getSectionIdFromPath(window.location.pathname);

      window.requestAnimationFrame(() => {
        scrollToSection(sectionId, "auto");
      });
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <div className='relative z-0 bg-primary' ref={appRef}>
      <Navbar />
      <main id='main-content'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero enable3D={enhancedVisuals} />
        </div>
        <About />
        <Experience />
        <Tech enable3D={enhancedVisuals} eventSource={appRef} />
        <Works />
        <Feedbacks />
        <div className='relative z-0' ref={contactRegionRef}>
          <Contact enable3D={enhancedVisuals} />
          {enhancedVisuals && showContactStars && (
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
