import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';

import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

import services from './services/tweet-service.js'

app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log('mongo db connected');
    let ser = new services();
    await ser.create({content: 'capital #excited'})
    
});