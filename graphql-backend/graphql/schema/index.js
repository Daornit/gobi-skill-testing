const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    _id: ID!
    title: String!
    url: String
    description: String
    shortDesc: String
    coverImg: String
    rate: Int!
    comments: [Comment!]
    createdDate: String!
    viewCount: Int!
  }

  type Comment {
    _id: ID!
    comment: String!
    email: String!
    createdDate: String!
    post: Post!
  }
  
  type Category {
    _id: ID!
    name: String!
    coverImg: String
    description: String
    posts: [Post!]
  }

  input PostInput {
    title: String
    description: String
    shortDesc: String
    coverImg: String
    rate: [Float!]
    createdDate: String
  }

  input CategoryInput {
    name: String
    coverImg: String
    description: String
  }

  input CommentInput {
    comment: String!
    email: String!
    postId: String!
  }

  type Message {
    message: String!
  }

  type Query {
    posts: [Post!]
    retrieveSinglePost(url: String!): Post!
    categories(id: ID, name: String): [Category!]!
  }

  type Mutation {
    # mutataion
    createPost(postInput: PostInput!): Post!
    updatePost(postId: ID!, postInput: PostInput): Post!
    deletePost(postId: String!): Post!

    createCategory(categoryInput: CategoryInput!): Category!
    updateCategory(categoryId: String!, categoryInput: CategoryInput!): Category!
    deleteCategory(categoryId: String!): Category!
    addPostToCategory(postId: ID!, categoryId: ID!): Category!
    removePostFromCategory(postId: ID!, categoryId: ID!): Message!

    createComment(commentInput: CommentInput!): Comment!
    deleteComment(commentId: String!): Comment!
  }
`;
