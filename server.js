/**
 * Developer : Navjeet Singh *
** This is entry file of our app
** babel-loader & babel-core plugin is required
**/
import express from 'express';
import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from './src/App';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req,res) => {
    const context = {};

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )

    const indexFile = path.resolve('./build/public/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log("Error", err);
            return res.status(500).send("Something went wrong",err);
        }
        
        const html = data.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
        return res.send(html);
    })
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});