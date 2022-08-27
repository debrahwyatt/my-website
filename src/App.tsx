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
import Stars from './components/Stars';
import Moon from './components/Moon';
import './App.css';
import UML from './domains/UML';
import Stats from './domains/Stats';
import Docs from './domains/Docs';
import Projects from './domains/Projects';


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
            <div className='background-fade'/>
            <div className='content-body'>
              <Switch>
                <Route path="/ai" component={AI} />
                <Route path="/uml" component={UML} />
                <Route path="/docs" component={Docs} />
                <Route path="/stats" component={Stats} />
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </div>

            <Hills/>
            <Moon/>
            <Stars/>
            <Sun/>
          </div>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
