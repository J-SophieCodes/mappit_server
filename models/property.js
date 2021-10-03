const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema(
  {
    name: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    monthly_rate: {
      type: Number,
    },
    least_term_months: {
      type: Number,
    },
    total_views: {
      type: Number,
    },
  },
);

const Property = mongoose.model("property", PropertySchema);

module.exports = Property;
