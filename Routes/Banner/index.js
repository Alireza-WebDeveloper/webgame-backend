const express = require('express');
const router = express.Router();
const BannerController = require('../../Controllers/Banner');

router
  .route('/')
  .get(BannerController.getBanner)
  .post(BannerController.createBanner);

router.route('/:bannerId').delete(BannerController.deleteBanner);

module.exports = router;
