const mongoose = require('mongoose');
//.populate('user).populate('dishes) s
const Schema = mongoose.Schema;

var favoritesSchema = new Schema({
  dishes:  {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Dish'
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
}, {
  timestamps: true
});

var Favorites = mongoose.model('favorite', favoritesSchema);

module.exports = Favorites;