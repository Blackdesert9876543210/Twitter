const { TweetRepository, HashtagRepository } = require('../repository/index');


class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }


async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags & to remove # from word
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags); // the tag which are already present in the database;
    console.log(alreadyPresentTags);
    let titleOfPersenttags = alreadyPresentTags.map((tag) => tag.title)
    let newTags = tags.filter(tag => !titleOfPersenttags.includes(tag)); //  the new tags which are not present
    newTags = newTags.map( tag => {
        return {title: tag, tweets: [tweet.id]} 
    });

    const response = await this.hashtagRepository.bulkcreate(newTags);
    alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save(); 
    })

    return tweet;
    
} 

}
module.exports = TweetService;