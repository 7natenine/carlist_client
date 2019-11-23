import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { AdListProvider } from './contexts/AdListContext'
import { AdProvider } from './contexts/AdContext'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AdListProvider> 
      <AdProvider>
        <App />
      </AdProvider> 
    </AdListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
