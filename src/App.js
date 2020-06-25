import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './component/demo'
function App() {
  return (
    <Router>
 <div className="App">
    
 <Switch>
              <Route exact path="/" component={Home}></Route>
    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
