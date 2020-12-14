const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  originalURL: { type: String, required: true },
  shortURLCode: { type: String, required: true, index: true, maxLength: 10 },
  dateCreated: { type: Date, default: Date.now },
  dateModified: { type: Date, default: Date.now, index: { expires: '3d' } },
  visitDates: [Date],
});

module.exports = { URLSchema };
