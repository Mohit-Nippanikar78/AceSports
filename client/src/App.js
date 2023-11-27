import React, { useCallback, useRef } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DomainCard from "./Components/SportEvents";
import useWindowSize from "./hooks/useWindowSize";
import Process from "./Components/Timer";
import { useInView } from "react-intersection-observer";
import About from "./Components/About";
import Sponsors from "./Components/Sponsors";
import SponsorMail from "./Components/Contact";
import Sport from "./Components/Sport";
import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
const App = () => {
  const app = useRef();
  const scrollContainer = useRef();
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });
  React.useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  // const skewConfigs = React.useMemo(
  //   () => ({
  //     ease: 0.4,
  //     current: 0,
  //     previous: 0,
  //     rounded: 0,
  //   }),
  //   []
  // );
  // const skewScrolling = useCallback(() => {
  //   skewConfigs.current = window.scrollY;
  //   skewConfigs.previous +=
  //     (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
  //   skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

  //   const diff = skewConfigs.current - skewConfigs.rounded;
  //   const acceleration = diff / size.width;

  //   const velocity = +acceleration;
  //   const skew = velocity * 70;

  //   scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px,0) skewY(${skew}deg)`;

  //   requestAnimationFrame(() => skewScrolling());
  // }, [size.width, skewConfigs]);

  // React.useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());

  // }, [skewScrolling]);

  return (
    <div className="bg-black text-white">
      <div className="fixed w-full top-0 z-50 right-0">
        <Navbar />
      </div>
      {/* <Sidebar/> */}
      <Routes>
        <Route
          path="/"
          element={
            <div ref={scrollContainer} className="overflow-hidden">
              <div ref={app} className="h-screen w-full  bg-black text-white">
                <Home reff={ref} inView={inView} />
              </div>
              <Process />
              <About />
              <div className=" w-full flex justify-center items-center">
                <DomainCard />
              </div>
              <Sponsors />
              <SponsorMail />
            </div>
          }
        />
        <Route path="/sport/:sportName" element={<Sport />} />
      </Routes>
    </div>
  );
};

export default App;
{
  /* <Route path="notes" element={<Notes />} />
<Route path="students" element={<Students />} />
<Route path="drag" element={<DragAndDrop/>}/>
<Route path="timetable" element={<TimeTable/>}/> */
}
