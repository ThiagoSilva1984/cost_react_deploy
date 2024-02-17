import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Project from './components/pages/Project'

import Container from './components/Layout/Container'

function App() {
  return (
    <Router >
      <Navbar />
      <Container customClass="minHeight"> {/*estou encapsulando aqui, no Container o props vai fazer o trabalho de mostrar */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newProject' element={<NewProject />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
