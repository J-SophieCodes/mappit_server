require("dotenv").config();

const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require('./routes/api');
const HttpError = require('./models/httpError');

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
    console.log('error connecting to MongoDB:', err.message);
  });

mongoose.Promise = global.Promise;

app.use(cors());

app.use('/api', routes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((err, req, res, next) => {
  res.status(err.code || 500);
  res.json({ error: err.message || "An unknown error has occurred." });
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});