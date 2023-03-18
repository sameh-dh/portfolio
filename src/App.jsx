import './css/App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx';
import Skills from './components/skills/Skills.jsx'

import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
   <Header />
   <main className='main'>
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
   </main>
   </>
  );
}

export default App;
