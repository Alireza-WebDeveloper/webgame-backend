const GameModel = require('../../Models/Game');

exports.getAllGames = async (req, res, next) => {
  try {
    // خواندن مقادیر پارامترها از آدرس URL
    const platform = req.query.platform;
    const genre = req.query.genre;
    const name = req.query.name;
    // جستجو در دیتابیس بر اساس مقادیر پارامترها
    let query = {};
    if (platform) query.platform = platform;
    if (genre) query.genre = genre;
    if (name) query.name = { $in: [new RegExp(name, 'i')] };
    const game = await GameModel.find(query);

    // پاسخ به درخواست
    return res.status(200).json({
      status: 200,
      message: 'بازی‌ها با موفقیت دریافت شدند',
      data: {
        game,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getGameById = async (req, res, next) => {
  try {
    // 1 ) Get GameId From Params
    const { gameId } = req.params;
    // 2 ) Find Game
    const game = await GameModel.findById(gameId);
    // 3 ) Validation
    if (!game) {
      return res.status({
        status: 400,
        message: 'بازی مورد نظر پیدا نشد',
      });
    }
    // 4 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'بازی با موفقیت دریافت شد',
      data: {
        game,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.createGame = async (req, res, next) => {
  try {
    // 1 ) Get Data Of Body
    const data = req.body;
    // 2 ) Create Game
    await GameModel.create(data);
    // 3 ) Response
    return res.status(200).json({
      status: 200,
      message: 'بازی با موفقیت ساخته شد',
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteGame = async (req, res, next) => {
  try {
    // 1 ) Get GameId From Params
    const { gameId } = req.params;
    // 2 ) Delete Game
    await GameModel.deleteOne({ _id: gameId });
    // 3 ) Response
    return res.status(200).json({
      status: 200,
      message: 'بازی با موفقیت حذف شد',
    });
  } catch (err) {
    next(err);
  }
};
