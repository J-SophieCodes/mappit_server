const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The property's name is required"]
    },
    latitude: {
      type: Number,
      required: [true, "The property's latitude is required"]
    },
    longitude: {
      type: Number,
      required: [true, "The property's longitude is required"]
    },
    city: {
      type: String,
      required: [true, "The property's city is required"]
    },
    country: {
      type: String,
      required: [true, "The property's country is required"]
    },
    monthly_rate: {
      type: Number,
      required: [true, "The property's monthly rate is required"]
    },
    least_term_months: {
      type: Number,
      required: [true, "The property's least term is required"]
    },
    total_views: {
      type: Number,
      default: 0
    },
  },
);

const Property = mongoose.model("property", PropertySchema);

module.exports = Property;
