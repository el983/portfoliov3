import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import Motion from './components/Motion';
import Card3 from './components/Card3';
import Card5 from './components/Card5';
import Journal from './components/Journal';
import Picture from './components/Picture';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newd1 from './components/Newd1';
import Contact from './components/Contact';
import Home from './components/Home';
import Zoom from './components/Zoom';
import Awards from './components/Awards';
// import Second from './components/Second';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Zoom/> */}
      
      <Newd1/>
      <Motion/>
      <Card3/>
      <Awards/>
      
      <Journal/>
      <div className="a">
        <Picture/>
      </div>
      <div className="b">
        <Contact/>
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
