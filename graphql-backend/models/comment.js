const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentsSchema = new Schema({
    comment: {
      type: String,
      required: true
    },
    email: { 
      type: String,
      required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: new Date()
    }, 
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true},
});


module.exports = mongoose.model('Comment', CommentsSchema);