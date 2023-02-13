import './css/App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx';
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
function App() {
  return (
   <>
   <Header />
   <main className='main'>
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
   </main>
   </>
  );
}

export default App;
