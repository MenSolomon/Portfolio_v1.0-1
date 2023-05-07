import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home.jsx";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import SipAndSavor from "./components/SipAndSavor.jsx";
import Chatteau from "./components/Chatteau.jsx";
import Crypto from "./components/CryptoYard.jsx";

function App() {
  const location = useLocation();
  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/caseStudy1.sip&Savour"
            element={<SipAndSavor />}
          ></Route>
          <Route
            path="/caseStudy2.chatteau&Nourriture"
            element={<Chatteau />}
          ></Route>
          <Route path="/caseStudy2.cryptoYard" element={<Crypto />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
