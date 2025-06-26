
import About from './Components/About/About';
import Certifications from './Components/Certifications/Certifications';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar/>
     <Home/>
     <About/>
     <Education/>
     <Projects/>
     <Experience/>
     <Certifications/>
     <Footer/>
     </div>
  );
}

export default App
