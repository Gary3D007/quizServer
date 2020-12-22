"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { getQuizElements } = require('./service');
const port = 3000;
const app = express();
app.get('/elements', (request, response) => {
    const setNumber = request.query.setNumber || 1;
    console.log('Request to get element for set number', setNumber);
    const elements = getQuizElements(setNumber);
    response.send(JSON.stringify(elements));
});
app.listen(port, () => {
    console.log('App is listening on port', port);
});
