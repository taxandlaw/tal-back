const Comment = require('../models/comment-schema');
const comment = require('../models/comment-schema');


exports.newComment = async(request, response) => {

    try{
const comment = await new Comment(request.body);
comment.save();
response.status(200).json(comment);
console.log(comment);
    }catch(error){
        console.log('error while uploading new comment', error)
    }
}


exports.getComments = async(request, response) => {

    try{
        const comments = await Comment.find({blogId: request.params.id});
        response.status(200).json(comments);
    }catch(error){
        response.status(500).json(error);
    }
}

exports.deleteComment = async(request, response) => {

    try{
        const comment = await Comment.findById(request.params.id);
       await comment.delete();
        response.status(200).json('comment deleted successfully');
    }catch(error){
        response.status(500).json(error);
    }
}




// exports.create = (req, res) => {
//     // console.log(req.body);

//     const { name, blogId, date, comments } = req.body;
    
   
//   //create post

//  Comment.create({ name, blogId, date, comments}, (err, comment) => {
//     if (err) {
//         console.log(err)
//         res.status(400).json({ error: 'error uploading comments' })
//     }

//     res.json(comment);
// })

// };





















// exports.newComment = async(request, response) => {
// try{
// const comment = new Comment(request.body);

// response.status(200).json(comment);
// console.log(comment)
// }catch(error){
//     console.log('error while uploding new Comment', error)
// }




// }