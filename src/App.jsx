
import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
 
  return (
    <>
     <Hero/>
     <Projects/>
     <Skills />
     <Contact/>
     <Footer/>
     <Analytics />

    </>
  );
}

export default App
