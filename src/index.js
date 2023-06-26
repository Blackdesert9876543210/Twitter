const express = require('express');
const connect = require('./config/database');
const app = express();

const HashtagRepository = require('./repository/hashtag-repository');
const TweetService = require('./services/tweet-service');
app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log('mongo db connected');
    
    let service = new TweetService();
    const tweet = await service.create({
        content : 'i am #exited and going to do #fun, #coding'
    });
    console.log(tweet);
   
})