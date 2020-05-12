const Comment = require('../../models/comment');
const Post = require('../../models/post');
const { transformComment } = require('../services/TransformService');

module.exports = {
  commentQueryResolver: {
  },
  commentMutationResolver: {
    createComment: async (parent, args, context, info) => {
      try {
        const comment = new Comment({
          comment: args.commentInput.comment,
          email: args.commentInput.email,
          post: args.commentInput.postId,
          createdDate: new Date(),
        });
  
        let createdComment;
  
        const result = await comment.save();
        createdComment = transformComment(result);
        const post = await Post.findById(result.post);

        if (!post) {
          throw new Error('Post not found.');
        }

        post.comments.push(result);
        await post.save();

        return createdComment;
      } catch (err) {
        throw err;
      }
    },
    deleteComment: async (parent, args, context, info) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated!');
      }

      try {
        let deletedComment = await Comment.findByIdAndRemove(args.commentId).populate('post');

        if(!deletedComment) throw new Error("Comment not found!");

        deletedComment.post.comments = deletedComment.post.comments.remove({_id: deletedComment._id});
        console.log(deletedComment.post.comments);

        await deletedComment.post.save();

        return deletedComment;
      } catch (err) {
        throw err;
      }
    },
  }
};
