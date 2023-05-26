import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactForm/ContactForm";
import Writing from "./components/Writing/Writing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { projectsData } from "./data/projectsData";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
