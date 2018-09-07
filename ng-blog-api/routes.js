'use strict';

module.exports = (app) => {
    app.use('/api/auth', require('./api/authentication'));
    app.use('/api/posts', require('./api/post'));
};