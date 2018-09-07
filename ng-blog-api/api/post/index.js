'use strict';

const express = require('express');
const controller = require('./post');
const router = express.Router();

const jwt = require('express-jwt');
const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPost);

router.post('/', auth, controller.createPost);
router.put('/:id', auth, controller.updatePost);
router.delete('/:id', auth, controller.removePost);

module.exports = router;