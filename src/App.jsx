import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Active from "./components/Active";
import Inactive from "./components/Inactive";
import { useExtensionContext } from "./Context/ExtentionContex";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  const {
    isDark,
    // toggleInActive,
    // toggleActive,
    // toggleSetDark,
    // setActiveState,
    // removeItems,
    // filterData,
    // toggleClickAll,
    cardData,
    // navActive,
    // setfilterData,
  } = useExtensionContext();

  useEffect(() => {
   
  }, [cardData]);

  return (
    <div
      className={`overflow-x-hidden py-[1rem] px-[1.5rem] mx-auto w-full h-[100dvh] ${
        isDark ? "light " : "dark "
      }`}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/active" element={<Active />} />
          <Route path="/inactive" element={<Inactive />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
