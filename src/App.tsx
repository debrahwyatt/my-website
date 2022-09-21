import './App.css';

import Sound from './Sound';
import Header from './Header';
import Footer from './Footer';
import Scenery from './Scenery';
import Overlay from './Overlay';
import View from './Content/View';

import { useState } from 'react';
import { Documentation, Home, Projects, About } from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);
  const onOverlayClose = () => {
    setOverlayOpen(false)
  }  

  const [bannerText, setBannerText] = useState("");

  let loc = window.location.pathname;
  let dir = loc.substring(0, loc.lastIndexOf('/'));

  return (
    <div className='app-wrapper'>
      <Sound/>
      <div className='app'>
        <Router>
        <Header bannerText={dir}/>
        <div className='app-body'>    
          <Scenery/>
          <div className='content-body'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/view" component={View} />
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
