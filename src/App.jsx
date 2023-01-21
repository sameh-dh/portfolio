import './css/App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx'

function App() {
  return (
   <>
   <Header />
   <main className='main'>
    <Home />
   </main>
   </>
  );
}

export default App;
