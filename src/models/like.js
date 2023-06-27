import mongoose from "mongoose";

const likeShema = new mongoose.Schema({
    onModel: {
        type: String ,
        require: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
       type: mongoose.Schema.Types.ObjectId,
       require: true,
       refPath: 'onModel'
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        red: 'User',
        require: true
    }
}, {timestamps: true}); 

const like = mongoose.model('like', likeShema);

export default like;