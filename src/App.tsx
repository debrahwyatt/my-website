import './App.css';

import Header from './Header';
import Sound from './Sound';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';

import { useState } from 'react';
import { Documentation, Home, Projects, About } from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-wrapper'>
      <Sound/>
      <div className='app'>
        <Router>
        <Header/>
        <div className='app-body'>    
          <Scenery/>
          <div className='content-body'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/documentation" component={Documentation} />
            </Switch>
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
