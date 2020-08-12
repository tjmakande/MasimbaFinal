const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ViewRouter = require('./Route/SiteRoute')

app.set('view engine', 'pug');
app.set('Views', path.join(__dirname, 'Views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', ViewRouter);

app.listen(3000, () => {
    console.log('Your website has launched on localhost:3000 ')
});

conosle.log("hello world");




