const express = require('express');
const router = express.Router();
const PlatformController = require('../../Controllers/Platform');

router.route('/').get(PlatformController.getAllPlatform);

module.exports = router;
