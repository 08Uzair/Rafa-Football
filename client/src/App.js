import "./App.css";
import Navbar from "./components/custom/Navbar";
import Stack from "./components/custom/Stack";
import About from "./components/general/About";
import Hero from "./components/general/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
