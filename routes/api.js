const { Router } = require('express');
var express = require('express');
var router = express.Router();

const api_controller = require('../controllers/API_controller');
router.get('/', api_controller.getAllPlayer);

module.exports = router;