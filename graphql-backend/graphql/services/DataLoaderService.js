const DataLoader = require('dataloader');
const mongoose = require('mongoose');
//entity import
const Post = mongoose.model('Post');

const postLoader = new DataLoader(postIds => {
  return Post.find({ _id: { $in: postIds } });
});

const singlePostLoader = new DataLoader(postIds => {
  return Post.find({ _id: { $in: postIds } });
});

const commentLoader = new DataLoader(commentIds => {
  return Comment.find({ _id: { $in: commentIds } }).sort({createdDate: -1});
})

exports.postLoader = postLoader;
exports.commentLoader = commentLoader;
exports.singlePostLoader = singlePostLoader;