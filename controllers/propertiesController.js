const Property = require("../models/property");

const getProperties = (req, res, next) => {
  Property.find({})
    .then(properties => {
      res.json(properties);
    });
};

const getPropertiesByCity = (req, res, next) => {
  let city = req.params.city;

  Property.find({ city })
    .then(properties => {
      res.json(properties);
    });

}

module.exports = {
  getProperties,
  getPropertiesByCity
};