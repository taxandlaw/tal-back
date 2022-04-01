// import { response } from 'express';
// import WebsiteBlog from '../models/websiteBlog';
const WebsiteBlog = require('../models/websiteBlog');
const slugify = require('slugify');
const websiteBlog = require('../models/websiteBlog');
const { response, request } = require('express');
// const { request } = require('express');


exports.create = (req, res) => {
    // console.log(req.body);

    const { title, content, user, author, category, picture } = req.body;
    const slug = slugify(title);
    // const { picture } = req.file;
    //validate

    switch (true) {
        case !title:
            return res.status(400).json({ error: 'Title is required' })
            break;
        case !content:
            return res.status(400).json({ error: 'Content is required' })
            break;

    }
  //create post

  WebsiteBlog.create({ title, content, user, slug, author, category, picture}, (err, websiteBlog) => {
    if (err) {
        console.log(err)
        res.status(400).json({ error: 'Duplicate post.Try another title' })
    }

    res.json(websiteBlog);
})

};

    // if (!req.file) 

    //     return res.status(404).json('file not found in controller');
    

    // const url = "mongodb+srv://sandhaya:G1fIBC2Qp9d4J7Dc@cluster0.lmswd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    // const url = 'http://localhost:8000'

    // const imageURL = `${url}/file/${reqest.file.filename}`
    // res.status(200).json(imageURL)
    
    
    // res.status(200).json(`${url}/file/${request.file.filename}`)




  


// file uploading

// exports.uploadImage = (req, res) =>{

//     const { picture } = req.file;
// WebsiteBlog.create({ picture }, (err, websiteBlog) => {
//     if (err) {
//         console.log(err)
//         res.status(400).json({ error: 'Duplicate post.Try another title' })
//     }

//     res.json(websiteBlog);
//     console.log(req.file)
//     console.log(websiteBlog)

// })





// };
















//All POst // .limit(2) // (This limits the posts on the home page)

exports.list = (req, res, next) => {
    let author = req.query.author;
    let category = req.query.category;

    if (author)

        websiteBlog.find({ author: author })
            .sort({ createdAt: -1 })

            .exec((err, WebsiteBlogs) => {
                if (err) console.log(err)

                else
                    res.json(WebsiteBlogs);
                // console.log(WebsiteBlogs)
            });





    else if (category)


        websiteBlog.find({ category: category })
            .sort({ createdAt: -1 })

            .exec((err, WebsiteBlogs) => {
                if (err) console.log(err)

                else
                    res.json(WebsiteBlogs);
                // console.log(WebsiteBlogs)
            });


    else

        websiteBlog.find({})

            .sort({ createdAt: -1 })

            .exec((err, WebsiteBlogs) => {
                if (err) console.log(err)

                else
                    res.json(WebsiteBlogs);

            });


};


//Detail view Post

exports.read = async(req, res) => {
  
    try{
        let websiteBlog = await WebsiteBlog.findById(req.params.id);
        res.status(200).json(websiteBlog);


    }catch(error){
        res.status(500).json(error);
    }
}





    // let id = req.params.id;

        //         websiteBlog.find({ _id: req.params.id })
        //     .exec((err, WebsiteBlog) => {
        //         if (err) console.log(err)

        //         else
        //             res.json(WebsiteBlog);
        //         console.log(WebsiteBlog)
        //     });

        // }

//     const { id } = req.params
//     // console.log(req.params.id)
//     WebsiteBlog.findOne({id}).exec((err, websiteBlog) => {
//         if (err) console.log(err)
//         console.log(websiteBlog)

//         res.json(websiteBlog);

//     });
// };


//delete post
exports.remove = (req, res) => {
    // const { slug } = req.params
    console.log(req.params.id)
    WebsiteBlog.findOneAndRemove({_id: req.params.id  })
    .exec((err, websiteBlog) => {
        if (err) console.log(err)
        console.log(websiteBlog)

        res.json({
            message: 'Blog deleted'
        });

    });
};


//Search title by words
// exports.list = (req, res) => {
//     var author = req.query.author;
//     var condition = author ? { author: author }

//     WebsiteBlog.find(condition)
//         .sort({ createdAt: -1 })

//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving posts."
//             });
//         });
// };


// update Blog

exports.update = (req, res) => {


    const { title, content, picture } = req.body;
    // const { picture } = req.file.originalname;
    WebsiteBlog.findOneAndUpdate({ _id : req.params.id }, { title, content, picture }, { new: true })
    .exec((err, websiteBlog) => {
        if (err) console.log(err)
        res.json(websiteBlog);
    });

};





