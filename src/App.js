import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Layout1 from './components/FormFill.css'
import FormFill from './components/FormFill'

export const ThemeContext = React.createContext();

function App() {

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='center'>
          <FormFill />
        </div>
      </div>
    </div>
  );
}

export default App; 
