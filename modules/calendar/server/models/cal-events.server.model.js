'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * CalEvent Schema
 */
var CalEventSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  url: {
    type: String,
    default: '',
    trim: true
  },
  type: {
    type: String,
    default: '',
    trim: true
  },
  allDay: Boolean,
  start: Date,
  end: Date,
  stick: { type: Boolean, default: true}, // connected to the controller for a private event/Sierra 10/29
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  className: [String],
  priv: Boolean
});

mongoose.model('CalEvent', CalEventSchema);