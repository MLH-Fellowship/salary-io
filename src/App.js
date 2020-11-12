import React from 'react';
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
