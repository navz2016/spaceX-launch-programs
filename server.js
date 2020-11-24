/**
 * Developer : Navjeet Singh *
** This is entry file of our app
** Due to webpack -- const express = require('express');
** can be changed to ES6 style of import
** babel-loader & babel-core plugin is required
**/
import express from 'express';
import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from './src/App';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req,res) => {

    const context = {};

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">
                    ${content}
                </div>
            </body>
        </html>
    `;


    res.send(html);
});

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});