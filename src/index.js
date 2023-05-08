import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RoutingApp from './agua/routes/routes';
import { Provider } from 'react-redux';
import store from './agua/config/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <RoutingApp />
        </Provider>
    </BrowserRouter>
    </React.StrictMode>
);
                
            