import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SliderDemo from './components/layout/layout';


ReactDOM.render(
  <React.StrictMode>
    <SliderDemo />,
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<SiderDemo />, mountNode);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
