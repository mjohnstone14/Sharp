'use strict';

/**
 * Module dependencies
 */
var songmakerPolicy = require('../policies/songmaker.server.policy'),
  songmaker = require('../controllers/songmaker.server.controller');

module.exports = function (app) {
  // Songmaker collection routes
  app.route('/api/songmaker').all(songmakerPolicy.isAllowed)
    .get(songmaker.list)
    .post(songmaker.create);

  // Single song routes
  app.route('/api/songmaker/:songId').all(songmakerPolicy.isAllowed)
    .get(songmaker.read)
    .put(songmaker.update)
    .delete(songmaker.delete);

  // Finish by binding the song middleware
  app.param('songId', songmaker.songByID);
};
