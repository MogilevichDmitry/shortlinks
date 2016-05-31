import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config';
import router from './routes/api';
import redirectRouter from './routes/redirect';
import linkInfoRouter from './routes/linkInfo';

const app = express();

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/info', linkInfoRouter);
app.use('/ref', redirectRouter);
app.use('/', router);

app.listen(config.port, function() {
    console.log('Listening ' + config.port +' port, its okey;)');
});

