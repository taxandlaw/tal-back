const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const CommentSchema = new mongoose.Schema({
// blogSlug:{
    //     type:String,
    //     required: true
    // },



    name: {
        type: String,
        required: true
    },

    blogId: {
        type: String,
        required: true
    },
    
    date: {
        type: String,
        // required: true
    },

    comments: {

        type: String,
        required: true,
        }
});

module.exports = mongoose.model('comment', CommentSchema)