import logo from './logo.svg';
import './App.css';


import Card3 from './components/Card3';
import Card5 from './components/Card5';
import Journal from './components/Journal';
import Picture from './components/Picture';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PicGallery from './components/PicGallery'
// import Newd1 from './components/Newd1';
import Contact from './components/Contact';
import Home from './components/Home';
// import Zoom from './components/Zoom';
import BlogSlider from './components/BlogSlider'
import Awards from './components/Awards';
import Timeline from './components/verticalTimeline'
// import Second from './components/Second';
import ScrollingCards from './components/ScrollingCards'
import About from './components/About';
// import CurtainBox from './components/CurtainBox';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <ScrollingCards/>
      
      <BlogSlider/>
      <Timeline/>
      {/* <Zoom/> */}
      
      {/* <Newd1/> */}
      {/* <Motion/> */}
      {/* <Card3/> */}
      <PicGallery/>
      
      <Awards/>
      
        
  
      
      {/* <CurtainBox/> */}
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
