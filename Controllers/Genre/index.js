exports.getAllGenre = async (req, res) => {
  try {
    // 1 ) Return Response
    return res.status(200).json({
      status: 200,
      message: 'ژانر بازی ها  با موفقیت دریافت شد',
      data: {
        genre: [
          'action',
          'adventure',
          'fps',
          'tps',
          'rpg',
          'strategy',
          'simulation',
          'sports',
          'racing',
          'horror',
          'fantasy',
          'sci-fi',
          'arcade',
          'interactive-fiction',
          'building-construction',
        ],
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
