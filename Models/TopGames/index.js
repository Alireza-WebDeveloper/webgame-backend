const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlatformEnum = [
  'playstation',
  'xbox',
  'steam',
  'pc',
  'android',
  'ios',
  'nintendo',
  'epicgamesstore',
];

const TopGamesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    bannerImage: { type: String, required: true },
    builder: { type: [String], required: true },
    platform: { type: [String], enum: PlatformEnum, required: true },
    createAt: { type: Date, default: Date.now },
    releaseYear: { type: Date, default: null },
  },
  {
    collection: 'TopGames',
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.id;

        if (ret.story && Array.isArray(ret.story)) {
          ret.story.forEach((storyItem) => {
            delete storyItem.id;
          });
        }
      },
    },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('TopGames', TopGamesSchema);
