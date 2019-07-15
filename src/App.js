import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import {Work} from './components/pages/Work';
import {NotFound} from './components/pages/NotFound';


function App() {
  return (
    <React.Fragment>
      <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route component={NotFound}/>
            </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
