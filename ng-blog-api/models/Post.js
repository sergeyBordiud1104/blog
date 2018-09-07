const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    image: String,
    description: String,
});

module.exports = mongoose.model('Post', PostSchema);