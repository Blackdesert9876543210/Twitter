import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository {
    constructor() {
        super (Like);
    }

    async findByUserAndLikeable (data) {
        try {
            //this is not working have to fix later
            console.log("findbyuserAndLikeable called");''
            const like = await Like.findOne(data);
            console.log("from likeable", like);
            return like;
        } catch (error) {
            throw error;
        }
    }
}



export default LikeRepository;