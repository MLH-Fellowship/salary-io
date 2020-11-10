import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout1 from './components/layout/Layout1';


ReactDOM.render(
  <React.StrictMode>
    <Layout1 />,
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<SiderDemo />, mountNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
