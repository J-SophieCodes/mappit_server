const express = require ('express');
const router = express.Router();
const propertiesController = require("../controllers/propertiesController");

router.get('/properties', propertiesController.getProperties);

router.get('/properties/:city', propertiesController.getPropertiesByCity);

module.exports = router;