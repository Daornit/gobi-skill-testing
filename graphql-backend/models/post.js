const mongoose = require('mongoose');
const slugify = require('slugify');

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true
    }, 
    description: { 
      type: String,
      default: ''
    },
    shortDesc: {
      type: String,
      default: ''
    },
    coverImg: {
      type: String,
      default: ''
    },
    // нийтлэлийн үнэлгээтэй болон хавсаргах мэдээлэл холбоотой хэсэг
    rate: { type : Array , default : [] },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    viewCount: { type: Number, default: 0},
    // огнооны мэдээлэл
    createdDate: {
        type: Date,
        required: true,
        default: new Date()
    },
});

PostSchema.methods.setUrl = function() {
  let slug = slugify(this.title)+ '-' + new Date().getTime();
  this.url = slug.toLowerCase();
}

module.exports = mongoose.model('Post', PostSchema);