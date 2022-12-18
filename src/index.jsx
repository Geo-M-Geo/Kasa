import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/sass/main.scss'
import PagesRoutes from './Routes/Routes'
import './index.scss'

// the Const Root Create a dom with a component inside who containt all the paths to the different pages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <PagesRoutes />
  </React.StrictMode>
);