const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const websiteBlogSchema = new mongoose.Schema({



    title: {
        type: String,
        trim: true,
        min: 3,
        max: 160,
        required: true
    },

    picture: {
        type: String,
        required: false
    },

    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true

    },

    content: {

        type: {},
        trim: true,
        required: true,
        min: 200,
        max: 2000,
    },



    user: {
        type: String,
        default: 'Admin'

    },

    author: {
        type: String,
        default: 'taxandlaw18'
    },

    category:{

        type: String,
        default: 'All'

    },

    // createdDate:{
    //     type: Date
    // }


    



}, {timestamps : true}

);

module.exports = mongoose.model('WebsiteBlog', websiteBlogSchema)