const express = require('express');
const router = express.Router();
const GenreController = require('../../Controllers/Genre');

router.route('/').get(GenreController.getAllGenre);

module.exports = router;
