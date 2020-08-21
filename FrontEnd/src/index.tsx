import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger'

import ReceiveDataReducer from './services/reducer';

const store = createStore(
    ReceiveDataReducer,
    applyMiddleware(thunk,logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
