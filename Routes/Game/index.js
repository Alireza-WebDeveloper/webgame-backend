const express = require('express');
const router = express.Router();
const GameController = require('../../Controllers/Game');

router
  .route('/')
  .get(GameController.getAllGames)
  .post(GameController.createGame);

router
  .route('/:gameId')
  .delete(GameController.deleteGame)
  .get(GameController.getGameById);
module.exports = router;
