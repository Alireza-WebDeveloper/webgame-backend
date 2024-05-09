const TopGamesModel = require('../../Models/TopGames');
exports.getTopGamesByYear = async (req, res, next) => {
  try {
    const { yearId } = req.params;
    // تبدیل سال به تاریخ با فرمت yyyy-mm-dd
    const startOfYear = new Date(`${yearId}-01-01`);
    const endOfYear = new Date(`${yearId}-12-31`);

    // جستجوی بازی‌ها در بازه زمانی مورد نظر
    const topGames = await TopGamesModel.find({
      releaseYear: { $gte: startOfYear, $lte: endOfYear },
    });
    return res.status(200).json({
      message: 'برترین بازی ها دریافت شد ',
      data: {
        topGames,
        year: yearId,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

exports.createTopGamesByYear = async (req, res, next) => {
  try {
    const data = req.body;
    await TopGamesModel.create(data);

    return res.status(200).json({
      message: 'برترین بازی ها با موفقیت ساخته شد ',
    });
  } catch (err) {
    throw new Error(err);
  }
};
