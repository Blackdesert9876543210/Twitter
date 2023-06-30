import {CommentRepository, TweetRepository} from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepository =  new CommentRepository();
        this.tweetRepository = new TweetRepository();
       
    }

    async createComment(modelId, modelType, userId, content) {
        console.log("create function called");
       if(modelType == 'Tweet') {
        var commentable = await this.tweetRepository.get(modelId);
        
       } else if (modelType == 'Comment') {
        var commentable = await this.commentRepository.get(modelId);

       } else {
        throw new Error('unknown model type');
       }
       console.log("before calling");
       const comment = await this.commentRepository.create({
        content: content,
        userId: userId,
        onModel: modelType,
        commentable: modelId,
        comments: []
       });
       
       commentable.comments.push(comment);
       await commentable.save();

       return comment;
    }
}

export default CommentService;