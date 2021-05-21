// Librerias
import React from 'react';
import ReactDOM from 'react-dom';

// Estilo
import './index.css';

// Componentes
import GifApp from './GifApp.jsx';

// Render
ReactDOM.render(
  //<React.StrictMode>
    <GifApp />,
  //</React.StrictMode>,
  document.getElementById('root')
);