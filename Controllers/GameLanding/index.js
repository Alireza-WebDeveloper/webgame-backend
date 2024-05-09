const GameLandingModel = require('../../Models/GameLanding');

exports.getGameLanding = async (req, res, next) => {
  try {
    // 1 ) Get Gamelanding Data
    const gameLanding = await GameLandingModel.find();
    // 2 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'گیم لندیگ با موفقیت دریافت شد',
      data: {
        gameLanding,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.createGameLanding = async (req, res, next) => {
  try {
    // 1 ) Get Data From Body
    const data = req.body;
    // 2 ) Create
    await GameLandingModel.create(data);
    // 3 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'گیم لندیگ با موفقیت ساخته شد',
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteGameLanding = async (req, res, next) => {
  try {
    // 1 ) Get GameId From Params
    const { gameLandingId } = req.params;
    // 2 ) Delete Game
    await GameLandingModel.deleteOne({ _id: gameLandingId });
    // 3 ) Response
    return res.status(200).json({
      status: 200,
      message: 'بازی با موفقیت حذف شد',
    });
  } catch (err) {
    next(err);
  }
};
