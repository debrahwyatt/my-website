import './App.css';

import Header from './Header';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';

import { useState } from 'react';
import { AI, Docs, Home, Projects, Stats, UML } from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sound from './Sound';


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-wrapper'>
      <Sound/>
      <Overlay isOpen={overlayOpen} hideOverlay={onOverlayClose} />
      <div className='app'>
        <Router>
        <Header/>
          <div className='app-body'>    
          <Scenery/>
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
          </div>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
