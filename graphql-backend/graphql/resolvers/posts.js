const mongoose = require('mongoose');
//import entities
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');

//import services
const {
  transformPost
} = require('../services/TransformService');

const PostService = require('../services/PostService');

module.exports = {

  postQueryResolver: {
    retrieveSinglePost: async(parent, args = {}, context, info) => {
      const post = await Post.findOne({url: args.url});
      ErrorService.requireEntity(post, 'Post')
      await PostService.updateViewCount(post);
      return transformPost(post);
    },
    posts: async (parent, args = {}, context, info) => {
      const posts = await Post.find();
      return posts.map(post => {
        return transformPost(post);
      });
    },
  },

  postMutationResolver: {
    createPost: async (parent, args, context, info) => {
      try {
        const post = new Post({
          title: args.postInput.title,
  
          description: args.postInput.description,
          shortDesc: args.postInput.shortDesc,
          coverImg: args.postInput.coverImg,
          rate: args.postInput.rate,
  
          createdDate: args.postInput.createdDate ? new Date(args.postInput.createdDate) : new Date(),
          comments: [],
        });
        post.setUrl();

        const result = await post.save();

        return transformPost(result);
      } catch (err) {
        throw err;
      }
    },
    updatePost: async (parent, args, context, info) => {
      try {
        const post = await Post.findById(args.postId);
        ErrorService.requireEntity(post, 'Post');
  
        const {
          title,
          description,
          shortDesc,
          coverImg,
          type,
          rate,
          createdDate,
        } = args.postInput 
        
        if(title) {
          post.title = title
          post.setUrl();
        };
        if(description) post.description = description;
        if(shortDesc) post.shortDesc = shortDesc;
        if(coverImg) post.coverImg = coverImg;
        if(rate) post.rate = rate;
        if(createdDate) post.createdDate = new Date(createdDate);

        const result = await post.save();
        return transformPost(result);
      } catch (err) {
        throw err;
      }
    },
    deletePost: async (parent, args, context, info) => {
      try {
        let removedPost = await Post.findByIdAndRemove(args.postId).populate('author');
        ErrorService.requireEntity(removedPost, "Post");

        await PostService.postRemoveAllRelation(removedPost.id);

        return removedPost;
      } catch (err) {
        throw err;
      }
    } 
  }
};