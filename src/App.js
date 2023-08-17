import Home from "./components/pages/Home.js";
import Company from "./components/pages/Company.js";
import Contact from "./components/pages/Contact.js";
import NewProject from "./components/pages/NewProject.js";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Container from "./components/pages/layout/Container.js";

function App() {
  return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </div>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/company" element={<Company/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/newproject" element={<NewProject/>}></Route>
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
  );
}

export default App;
