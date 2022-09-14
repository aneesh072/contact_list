const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: false,
  },
});

const ContactModel = mongoose.model('contacts', ContactSchema);
module.exports = ContactModel;
