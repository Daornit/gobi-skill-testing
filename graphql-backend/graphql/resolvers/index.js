const { postQueryResolver, postMutationResolver } = require('./posts');
const { categoryQueryResolver, categoryMutationResolver } = require('./categories');
const { commentQueryResolver, commentMutationResolver } = require('./comments');

const rootResolver = {
  Query: {
    ...postQueryResolver,
    ...categoryQueryResolver,
    ...commentQueryResolver,
  },
  Mutation: {
    ...postMutationResolver,
    ...categoryMutationResolver,
    ...commentMutationResolver,
  }
}

module.exports = rootResolver;
