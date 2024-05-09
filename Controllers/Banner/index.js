const BannerModel = require('../../Models/Banner');

exports.getBanner = async (req, res, next) => {
  try {
    // 1 ) Get banner Data
    const banner = await BannerModel.find();
    // 2 ) Return Response
    return res.status(200).json({
      status: 200,
      message: ' بنر  با موفقیت دریافت شد',
      data: {
        banner,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.createBanner = async (req, res, next) => {
  try {
    // 1 ) Get Data From Body
    const data = req.body;
    // 2 ) Create
    await BannerModel.create(data);
    // 3 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'بنر با موفقیت ساخته شد',
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteBanner = async (req, res, next) => {
  try {
    // 1 ) Get GameId From Params
    const { bannerId } = req.params;
    // 2 ) Delete Game
    await BannerModel.deleteOne({ _id: bannerId });
    // 3 ) Response
    return res.status(200).json({
      status: 200,
      message: 'بنر با موفقیت حذف شد',
    });
  } catch (err) {
    next(err);
  }
};
