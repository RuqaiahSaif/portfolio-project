
import './App.css';
import Navbar from './component/Navbar';
import Hiro from './component/Hiro'
import Skills from './component/Skills'
import Cvbutton from './component/Cvbutton';
import Projects from './component/Projects';
import { BrowserRouter } from "react-router-dom";
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        
     
    <Navbar/>
    <Hiro/>
    <Cvbutton/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </BrowserRouter> 
    </>
  );
}

export default App;
