const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
  },
  contact: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
  },
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },

  isAdmin: Boolean,
});

module.exports = mongoose.model("owner", ownerSchema);
