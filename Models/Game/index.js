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

const GenreEnum = [
  'action',
  'adventure',
  'fps', // First-Person Shooter
  'tps', // Third-Person Shooter
  'rpg', // Role-Playing Game
  'strategy',
  'simulation',
  'sports',
  'racing',
  'horror',
  'fantasy',
  'sci-fi', // Science Fiction
  'arcade',
  'interactive-fiction',
  'building-construction',
];

const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    genre: { type: [String], required: true, enum: GenreEnum },
    platform: { type: [String], required: true, enum: PlatformEnum },
    bannerImage: { type: String },
    story: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    score: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    trailer: {
      poster: { type: String },
      url: String,
    },
    gallery: [{ type: String }],
    releaseYear: { type: Date, default: null },
    review: {
      positive: [{ type: String }],
      negative: [{ type: String }],
    },
  },
  {
    collection: 'Game',
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

module.exports = mongoose.model('Game', GameSchema);
