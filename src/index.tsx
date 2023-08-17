import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';
import GlobalStyle from './GlobalStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
