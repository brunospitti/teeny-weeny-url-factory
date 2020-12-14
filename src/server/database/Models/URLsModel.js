const mongoose = require('mongoose');
const { URLSchema } = require('../Schemas/URLSchema');

const URLsModel = mongoose.model('urls', URLSchema);
module.exports = { URLsModel };
