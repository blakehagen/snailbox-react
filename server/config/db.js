'use strict';

const mongoose = require('mongoose');
const mongoURI = 'mongodb://admin:admin@ds031617.mlab.com:31617/feelings-journal';

module.exports = () => {
  mongoose.connect(mongoURI);
  mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB at', mongoURI);
  })
};