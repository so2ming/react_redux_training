import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import CounterContainer from './containers/CounterContainer';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import Root from './Root';

 import { Provider } from 'react-redux';

const store = createStore(Root);

ReactDOM.render(
    <Provider store={store}>
    <CounterContainer />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
