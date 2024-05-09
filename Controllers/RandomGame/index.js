const GameModel = require('../../Models/Game');

exports.getRandomGames = async (req, res, next) => {
  try {
    const randomGames = await GameModel.aggregate([{ $sample: { size: 10 } }]);
    return res.status(200).json({
      status: 200,
      message: 'بازی با موفقیت دریافت شد',
      data: {
        randomGames,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
