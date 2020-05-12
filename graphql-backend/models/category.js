const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    coverImg: {
      type: String,
    },
    description: { 
      type: String
    },
    posts: [{
      type: { type: Schema.Types.ObjectId, ref: 'Post'}
    }]
});


module.exports = mongoose.model('Category', CategorySchema);