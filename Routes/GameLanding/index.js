const express = require('express');
const router = express.Router();
const GameLandingController = require('../../Controllers/GameLanding');

router
  .route('/')
  .get(GameLandingController.getGameLanding)
  .post(GameLandingController.createGameLanding);

router.route('/:gameLandingId').delete(GameLandingController.deleteGameLanding);

module.exports = router;
