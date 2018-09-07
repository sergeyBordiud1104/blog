'use strict';

const Post = require('../../models/Post');

exports.getAllPosts = (req, res, next) => {
    Post.find(function (err, posts) {
        if (err) return next(err);
        res.json(posts);
    });
};

exports.getPost = (req, res, next) => {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

exports.createPost = (req, res, next) => {
    console.log(req.body);
    Post.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

exports.updatePost = (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

exports.removePost = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};