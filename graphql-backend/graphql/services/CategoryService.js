const mongoose = require('mongoose');
//entity import
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');
//service import
const ErrorService = require('./ErrorService');

const CategoryService = {
  deleteCategory: async categoryId => {
    let removedCategory = await Category.findByIdAndRemove(categoryId);
    return removedCategory;
  },
  checkRelationCategoryAndPost: async (postId, categoryId, type) => {
    //...
  },
  removePostRelationToCategory: async (postId, categoryId) => {
    //...
  },
}

module.exports = CategoryService;