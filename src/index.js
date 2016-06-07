import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import router from './routes/api';
import redirectRouter from './routes/redirect';
import linkInfoRouter from './routes/linkInfo';
import tagRouter from './routes/tags';

const app = express();

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('dev'));

app.use('/tag', tagRouter);
app.use('/info', linkInfoRouter);
app.use('/ref', redirectRouter);
app.use('/', router);

app.listen(config.port, function() {
    console.log('Listening ' + config.port +' port, its okey;)');
});

