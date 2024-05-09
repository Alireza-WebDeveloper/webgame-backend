const mongoose = require('mongoose');
const { Schema } = mongoose;

const BannerSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
  },
  {
    collection: 'Banner',
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

module.exports = mongoose.model('Banner', BannerSchema);
