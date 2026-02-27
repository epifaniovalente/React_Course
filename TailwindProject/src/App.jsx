import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/projectoCost/Home";
import Company from "./components/projectoCost/Company";
import Project from "./components/projectoCost/Projects";
import Contact from "./components/projectoCost/Contact";
import Container from "./components/projectoCost/Container";
import NavBar from "./components/projectoCost/NavBar";
import Footer from "./components/layout/Footer"
import NewProject from "./components/projectoCost/NewProject";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Container>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
