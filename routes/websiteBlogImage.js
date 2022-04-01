
const express = require('express');
const router = express.Router(); 
const {uploadImage, getImage} = require('../controllers/upload');
const{newComment, getComments, deleteComment} = require('../controllers/comment-controller')
const upload = require('../middleware/upload');

router.post('/file/upload', upload.single("file"), uploadImage);
router.get('/file/:filename', getImage);


router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

module.exports = router;