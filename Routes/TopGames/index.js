const express = require('express');
const router = express.Router();
const TopGamesController = require('../../Controllers/TopGames');

router.route('/:yearId').get(TopGamesController.getTopGamesByYear);

router.route('/').post(TopGamesController.createTopGamesByYear);
module.exports = router;
