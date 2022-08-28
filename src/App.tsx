import './App.css';

import Header from './Header';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';

import { useState } from 'react';
import { AI, Docs, Home, Projects, Stats, UML } from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


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
          <Header/>
          <Footer/>
          <div className='app-body'>    
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
            {/* Should be in scenery */}
            <div className='background-fade'/> 
            <Scenery/>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
