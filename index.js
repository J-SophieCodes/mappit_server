const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Property = require('./models/property')
require("dotenv").config();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
    console.log('error connecting to MongoDB:', err.message);
  });

mongoose.Promise = global.Promise;

app.get('/properties', (request, response) => {
  Property.find({}).then(properties => {
    response.json(properties);
  });
});

app.get('/properties/:id', (request, response) => {
  Property.findById(request.params.id).then(property => {
    response.json(property);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});