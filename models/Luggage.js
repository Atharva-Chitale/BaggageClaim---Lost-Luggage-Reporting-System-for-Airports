const mongoose = require('mongoose');

const luggageSchema = new mongoose.Schema({
  description: String,
  color: String,
  stickers: String,
  airline: String,
  date: Date,
  status: {
    type: String,
    default: 'Pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Luggage', luggageSchema);
