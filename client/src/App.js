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
import { Route, Routes } from "react-router-dom";
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
