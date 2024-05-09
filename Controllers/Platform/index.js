exports.getAllPlatform = async (req, res) => {
  try {
    // 1 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'پلتفرم  با موفقیت دریافت شد',
      data: {
        platform: [
          'playstation',
          'xbox',
          'steam',
          'pc',
          'android',
          'ios',
          'nintendo',
          'epicgamesstore',
        ],
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
