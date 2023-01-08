// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './styles/base.css'
import {Provider} from 'react-redux'
import store from './store'
import "@arco-design/web-react/dist/css/arco.css"
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

