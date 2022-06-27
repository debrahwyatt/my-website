import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Home from './domains/Home';
import Music from './components/Music';
import Overlay from './components/Overlay';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import AI from './domains/AI';
import Banner from './components/Banner';
import Sun from './components/Sun';
import SoundEffects from './components/SoundEffects';
import Cloud from './components/Cloud';


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-wrapper'>
      <Overlay isOpen={overlayOpen} hideModal={onOverlayClose} />

      <div className='app-body'>
        { overlayOpen === false && <Music/> }
        <SoundEffects/>
        <Router>
          <Banner/>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ai" component={AI} />
          </Switch>
          <Sun/>
          <div id="cloud_box"></div>
          <Cloud/>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
