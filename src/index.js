import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config';
import router from './routes/api';

const app = express();

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/', router);
/*app.post('/api', function(req, res) {
    const text = req.body.text;
    console.log(text);
   // res.send(200);
});*/

app.listen(config.port, function() {
    console.log('Listening ' + config.port +' port, its okey;)');
});