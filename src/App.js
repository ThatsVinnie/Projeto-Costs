import Home from "./components/pages/Home.js";
import Company from "./components/pages/Company.js";
import Contact from "./components/pages/Contact.js";
import NewProject from "./components/pages/NewProject.js";
import Project from "./components/pages/Project.js";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Projects from "./components/pages/Projects.js";

function App() {
  return (
      <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/company" element={<Company/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/newproject" element={<NewProject/>}></Route>
            <Route path="/project/:id" element={<Project/>}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>
  );
}

export default App;
