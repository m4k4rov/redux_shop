import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import store from './store';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
                <BrowserRouter basename='redux_shop'>
                    <App />
                </BrowserRouter>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
