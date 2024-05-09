const express = require('express');
const router = express.Router();
const RandomGameController = require('../../Controllers/RandomGame');

router.route('/').get(RandomGameController.getRandomGames);

module.exports = router;
