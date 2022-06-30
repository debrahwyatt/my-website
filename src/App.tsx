import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import AI from './domains/AI';
import Home from './domains/Home';
import Sun from './components/Sun';
import Cloud from './components/Cloud';
import Hills from './components/Hills';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';

import './App.css';


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    const music = document.getElementById("music") as HTMLAudioElement
    setOverlayOpen(false)
    music.volume = 0.25
    music.play()
  }  

  return (
    <div className='app-wrapper'>
      <Overlay isOpen={overlayOpen} hideOverlay={onOverlayClose} />
      <div className='app'>
        <Router>
          <Banner/>
          <Header/>
          <div className='app-body'>
            <div className='content-body'>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/ai" component={AI} />
              </Switch>
            </div>
            <Hills/>
            <Sun/>
          </div>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
