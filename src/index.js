import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PositionProvider } from './context/useCoordinates';

ReactDOM.render(
  <React.StrictMode>
    <PositionProvider>
      <App />
    </PositionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);