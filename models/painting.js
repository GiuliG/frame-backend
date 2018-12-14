'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  audio: {
    type: String
  }
});

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;