import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from './myreducer/reducer';
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mystore = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={mystore}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
