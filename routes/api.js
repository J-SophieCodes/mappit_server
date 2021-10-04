const express = require ('express');
const router = express.Router();
const propertiesController = require("../controllers/propertiesController");

router.get('/properties', propertiesController.getProperties);

module.exports = router;