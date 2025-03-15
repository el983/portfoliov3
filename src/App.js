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
// import Second from './components/Second';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Newd1/>
      <Motion/>
      <Card3/>
      <Card5/>
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
