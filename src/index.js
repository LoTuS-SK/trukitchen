import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { createStore } from "redux"
//import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import reducer from "./stor/reducer.js"
import { store } from './stor/index';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
  

);

