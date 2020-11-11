import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Layout1 from './components/layout/Layout1'

export const ThemeContext = React.createContext();

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
        <Route path="/predict" render={props =>  (<Layout1 {...props}/>)}/>
          <Route path='/' exact component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App; 