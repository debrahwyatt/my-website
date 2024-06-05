import './App.css';

import Sound from './Sound';
import Header from './Header';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';
import View from './Content/View';

import { useState } from 'react';
import { Documentation, Home, Projects, About } from './Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  const [bannerText, setBannerText] = useState<string>('');

  const updateBannerText = (text: string) => {
    setBannerText(text);
  };
  
  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-wrapper'>
      <Sound/>
      <div className='app'>
        <Router>
        <Header bannerText={"Hey!"}/>
        <div className='app-body'>    
          <Scenery/>
          <div className='content-body'>
            <Routes>
              <Route path="/" element={<Home setBannerText={updateBannerText} />} />
              <Route path="/view" element={<View />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/documentation" element={<Documentation />} />
            </Routes>
          </div>
        </div>
        <Footer/>
        </Router>
      </div>
      <Overlay isOpen={overlayOpen} hideOverlay={onOverlayClose} />
    </div>
  );
}

export default App;
