const { TweetRepository } = require('../repository/index');


class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }


async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
    tags = tags.map(tag) = tag.substring(1); // to remove # from word
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // to do 
    /*
    1. bulcreate in mongoose
    2. filter title of hastag based on multiple tags
    3. How to add tweet id inside all the hastags
    */
    return tweet;
} 

}
module.exports = TweetService;