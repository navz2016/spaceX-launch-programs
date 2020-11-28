import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

import App from './App';

//Attach event listners using hydrate function
ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);

//required for offline capabilities and turning into pwa
//serviceWorker.register();