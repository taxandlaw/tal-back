

const express = require('express');
const router = express.Router();
// const upload = require('../middleware/upload');
// const websiteBlogController = require('../controllers/websiteBlog');
// const uploadController = require('../controllers/upload');

//import controller method
const {list, create, read, remove, update} = require('../controllers/websiteBlog');
// const {uploadImage} = require('../controllers/upload.js');
// router.post('/websiteBlog/file/upload', upload.single("file"), create);
router.post('/websiteBlog', create);
router.get('/websiteBlogs', list);
router.get('/websiteBlog/:id', read);
router.delete('/websiteBlog/:id', remove);
router.put('/websiteBlog/:id', update);

// const {suggestion} = require('../controllers/static');
// router.post('/suggestion', suggestion);





module.exports = router;