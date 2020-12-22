import express = require('express');

const {getQuizElements} = require('./service');
const port: number = 3000;
const app: express.Application = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/elements', (request, response) => {
    const setNumber = request.query.setNumber || 1;
    console.log('Request to get element for set number', setNumber);
    const elements = getQuizElements(setNumber);
    response.send(elements);
});

app.listen(port, () => {
    console.log('App is listening on port', port);
});
