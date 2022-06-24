import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './domains/Home';
import Music from './components/Music';
import Overlay from './components/Overlay';
import { useState } from 'react';


const App = () => {

  const [overlayOpen, setOverlayOpen] = useState(true);

  const onLineSettingsClose = () => {
    setOverlayOpen(false)
  }  

  return (
    <Router>
      <div >
        <Overlay isOpen={overlayOpen} hideModal={onLineSettingsClose} />
      </div>
      <div>
        <header>
        </header>
        <div className="overflow-auto" style={{ height: 'auto' }}>
          <main className="d-flex justify-content-center pt-3">
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/about" component={About} /> */}
              </Switch>
            </div>
          </main>
        </div>
        <div style={{backgroundColor: "black"}}>
          hi
        </div >
        <footer style={{width: "300px", backgroundColor: "black"}} />
          
      </div>
      {overlayOpen === false && 
      <Music/>
      }
      

    </Router>
  );
}

export default App;
