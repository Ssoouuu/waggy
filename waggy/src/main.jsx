import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'
// import './scss/style.scss'

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// )