import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import FooterComp from './components/FooterComp';
import Certification from './components/Certification';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='h-20 bg-blue-400'>hh</div>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certification />} />
      </Routes>
      <FooterComp/>
      <Footer />
    </Router>
  );
}

export default App;
