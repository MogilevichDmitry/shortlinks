import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from './config';
import router from './routes/api';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(config.database);

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.use('/', router);
/*app.post('/api', function(req, res) {
    const text = req.body.text;
    console.log(text);
   // res.send(200);
});*/

app.listen(3000, function() {
    console.log('Listening 3000 port, its okey;)');
});