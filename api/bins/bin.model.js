'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var binSchema = new Schema({
  chipNumber: Number,
  binCategory: String,
  binSize: String,
  startDate: Date,
  customerId: Number,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('bin', binSchema);