import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/App.css';
import './index.css';
import './Styles/Responsive.css'

//import App from './Components/App';

import App from './Components/App'
import ContenidoFueraRango from './Components/ContenidoFueraRango'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <App/>
     <ContenidoFueraRango/>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
