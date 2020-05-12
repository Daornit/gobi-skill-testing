const mongoose = require('mongoose');

const PostService = {
  updateViewCount: async post => {
    if(post.viewCount) post.viewCount = post.viewCount + 1;
    else post.viewCount = 1;
    await post.save();
  }, 
  postRemoveAllRelation: async postId => {
    //...
  }
}

module.exports = PostService;