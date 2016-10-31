'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  CalEvent = mongoose.model('CalEvent'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an article
 */
exports.create = function (req, res) {
  var calEvent = new CalEvent(req.body);
  calEvent.user = req.user;

  if (req.priv && (calEvent.user._id === req.user._id)) {
    calEvent.save(function (err) {
      res.json(calEvent);
    });
  } else if (!req.priv) {
    calEvent.save(function (err) {
      res.json(calEvent);
    });
  } else {
    return res.status(403).send({
      message: 'Must be logged in to save a private event'
    });
  }
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var calEvent = req.calEvent ? req.calEvent.toJSON() : { };

  // Add a custom field to the event, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  calEvent.isCurrentUserOwner = !!(req.user && calEvent.user && calEvent.user._id.toString() === req.user._id.toString());

  res.json(calEvent);
};

/**
 * Update an article
 */
exports.update = function (req, res) {
  var calEvent = req.calEvent;

  calEvent.title = req.body.title;
  calEvent.content = req.body.content;

  calEvent.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(calEvent);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var calEvent = req.calEvent;
  calEvent.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(calEvent);
    }
  });
};

/**
 * List of Articles
 *
 * Changed priv to false for each .find function to only display public events. - Marwan & Kayla (10/31)
 *
 */

exports.list = function (req, res) {
  if (req.user) {
    CalEvent.find({ $or: [{ priv: false }, { user: req.user._id }] }).sort('-created').populate('user', 'displayName').exec(function (err, calEvents) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(calEvents);
      }
    });
  } else {
    CalEvent.find({ priv: false }).sort('-created').populate('user', 'displayName').exec(function (err, calEvents) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(calEvents);
      }
    });
  }
};

/**
 * Article middleware
 */
exports.calEventByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Calendar Event is invalid'
    });
  }

  CalEvent.findById(id).populate('user', 'displayName').exec(function (err, calEvent) {
    if (err) {
      return next(err);
    } else if (!calEvent) {
      return res.status(404).send({
        message: 'No calendar event with that identifier has been found'
      });
    }
    req.calEvent = calEvent;
    next();
  });
};
