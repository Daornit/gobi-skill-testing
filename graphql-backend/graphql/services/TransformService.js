//import services
const { dateToString, arrayOfIntAverage } = require('../../helpers');

const { commentLoader, singlePostLoader, postLoader } = require('../services/DataLoaderService');

const manyComments = async commentIds => {
  try {
    if(!commentIds) return null;

    const comments = await commentLoader.loadMany(commentIds);
    return comments.map(comment => {
      return transformComment(comment);
    });;
  } catch (err) {
    throw err;
  }
}

const manyPosts = async postIds => {
  try {
    if(!postIds) return null;

    const posts = await postLoader.loadMany(postIds);
    return posts.map(post => {
      return transformPost(post);
    });
  } catch (err) {
    throw err;
  }
}

const singlePost = async postId => {
  try {
    if(!postId) return null;

    const post = await singlePostLoader.load(postId.toString());
    return transformPost(post);
  } catch (err) {
    throw err;
  }
};

const transformPost = (post, mergeType='') => {
  let rate = arrayOfIntAverage(post.rate);
  return {
    ...post._doc,
    _id: post.id,
    createdDate: dateToString(post._doc.createdDate),
    rate: rate,
    comments: manyComments.bind(this, post.comments),
  };
};

const transformCategory = category => {
  return {
    ...category._doc,
    _id: category.id,
    posts: manyPosts.bind(this, category.posts),
  }
}

const transformComment = comment => {
  return {
    ...comment._doc,
    _id: comment.id,
    post: singlePost.bind(this, comment.post),
    createdDate: dateToString(comment._doc.createdDate),
  }
}

exports.transformPost = transformPost;
exports.transformComment = transformComment;
exports.transformCategory = transformCategory;