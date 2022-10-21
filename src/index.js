import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Router DOM
import { BrowserRouter } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import { store } from './app/store' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >
);
