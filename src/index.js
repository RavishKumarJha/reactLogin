import React from 'react';
import reactDom from 'react-dom';
// import './index.css'; 
import { Provider } from 'react-redux';
import {App} from './app/App';

import { store } from './_helpers';



import registerServiceWorker from './registerServiceWorker';

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
