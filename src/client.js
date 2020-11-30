import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

//Attach event listners using hydrate function
ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);

/* required for offline capabilities and turning into pwa
* need to include logic to register install, cache url and clear cache on new render
* complete if time permits */

serviceWorker.register();