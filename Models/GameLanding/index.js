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

const GameLandingSchema = new Schema(
  {
    platform: { type: String, required: true, enum: PlatformEnum },
    description: { type: String, required: true },
    image: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
  },
  {
    collection: 'GameLanding',
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.id;
      },
    },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('GameLanding', GameLandingSchema);
