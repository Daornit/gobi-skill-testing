const mongoose = require('mongoose');

//entity imports
const Category = mongoose.model('Category');

//service import
const {
  transformCategory,
} = require('../services/TransformService');
const CategoryService = require('../services/CategoryService');

module.exports = {

  categoryQueryResolver: {
    categories: async (parent, args, context, info) => {
      try {
        let categories;
        if (args.id) categories = await Category.find({_id: args.id});
        else if (args.name) categories = await Category.find({name: args.name});
        else categories = await Category.find();

        console.log(categories);

        return categories.map(category => {
          return transformCategory(category);
        });
      } catch (err) {
        throw err;
      }
    },
  },

  categoryMutationResolver: {
    createCategory: async (parent, args, context, info) => {
      try {
        const category = new Category({
          name: args.categoryInput.name,
          description: args.categoryInput.description,
          coverImg: args.categoryInput.coverImg,
          posts: []
        });

        let createdCategory;

        const result = await category.save();
        createdCategory = transformCategory(result);

        return createdCategory;
      } catch (err) {
        throw err;
      }
    },
    updateCategory: async (parent, args, context, info) => {
      await AuthService.requireAuth(context);

      const category = await Category.findById(args.categoryId);
      const {
        name,
        description,
        coverImg
      } = args.categoryInput

      if (name) category.name = name;
      if (description) category.description = description;
      if (coverImg) category.coverImg = coverImg;

      try {
        const result = await category.save();
        let updatedCategory = transformCategory(result);
        // хуучин coverImg ийг өгөгдлийн сангаас устгах
        return updatedCategory;
      } catch (err) {
        throw err;
      }
    },

    deleteCategory: async (parent, args, context, info) => {
      try {
        return await CategoryService.deleteCategory(args.categoryId);
      } catch (err) {
        throw err;
      }
    },
    addPostToCategory: async (parent, { postId, categoryId, type }, context, info) => {
      try {
        const relationExist = await CategoryService.checkRelationCategoryAndPost(postId, categoryId, type);
        if(relationExist) ErrorService.throwError("Already exists relation between post and category");

        return null;
      } catch (err) {
        throw err;
      }
    },
    removePostFromCategory: async (parent, { postId, categoryId }, context, info) => {
      try {
        await CategoryService.removePostRelationToCategory(postId, categoryId);
        return {
          message: "Амжилттай харилцан хамаарлуудыг устгалаа."
        };
      } catch (err) {
        throw err;
      }
    }
  }
};