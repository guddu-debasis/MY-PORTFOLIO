import './App.css';
import './index.css';
import Head from './Components/port'; // Navbar
import Hero from './Components/Home'; // Home section
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Projects from './Components/projects';
import Experience from './Components/Experience';
function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Head />
      <Hero />
      <Skills />
      <Education/>
      <Projects/>
      <Experience/>
      <Contact />
    </div>
  );
}

export default App;
