'use strict';

var _ = require('lodash');
var Bin = require('./bin.model');

// Get list of bins
exports.index = function(req, res) {
	console.log("getting bins...");
          // Connect to the db
   Bin.find(function (err, bins) {
    if(err) { return handleError(res, err); }
    return res.json(200, bins);
  });

} ;

// Creates a new bin in datastore.
exports.create = function(req, res) {
	console.log("creating bin...");
  Bin.create(req.body, function(err, bin) {
    if(err) { return handleError(res, err); }
    return res.json(201, bin);
  });
};

// Updates an existing bin in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bin.findById(req.params.id, function (err, bin) {
    if (err) { return handleError(res, err); }
    if(!bin) { return res.send(404); }
    var updated = _.merge(bin, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bin);
    });
  });
};

// delete an existing bin in datastore.
exports.delete = function(req, res) {
    Bin.findById(req.params.id, function (err, bin) {
    if(err) { return handleError(res, err); }
    if(!bin) { return res.send(404); }
    bin.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
};