import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Home from './domains/Home';
import Music from './components/Music';
import Overlay from './components/Overlay';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import AI from './domains/AI';


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);

  const onLineSettingsClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <div className='app-body'>
      <Overlay isOpen={overlayOpen} hideModal={onLineSettingsClose} />
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ai" component={AI} />
        </Switch>
        { overlayOpen === false && <Music/> }
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
