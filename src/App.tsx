import './App.css';

import Sound from './Sound';
import Header from './Header';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';
import View from './Content/View';

import { useState } from 'react';
import { Documentation, Home, Projects, About, WorkExperience, Volunteerism, Education, Certification, Contact } from './Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  const [bannerText, setBannerText] = useState<string>('Debrah Wyatt E.I.T.');
  
  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-wrapper'>
      <Sound/>
      <div className='app'>
        <Router>
        <Header bannerText={bannerText} setBannerText={setBannerText}/>
        <div className='app-body'>    
          <Scenery/>
          <div id='content-body'>
            <Routes>
              <Route path="/my-website/" element={<Home setBannerText={setBannerText} />} />
              <Route path="/view/" element={<View />} />
              <Route path="/about/" element={<About />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/projects/" element={<Projects />} />
              <Route path="/education/" element={<Education />} />
              <Route path="/volunteerism/" element={<Volunteerism />} />
              <Route path="/certification/" element={<Certification />} />
              <Route path="/documentation/" element={<Documentation />} />
              <Route path="/workexperience/" element={<WorkExperience />} />
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
