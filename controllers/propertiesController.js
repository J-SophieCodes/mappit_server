const Property = require("../models/property");

const getProperties = (req, res, next) => {
  Property.find({})
    .then(properties => {
      res.json(properties);
    });
};

module.exports = {
  getProperties
};