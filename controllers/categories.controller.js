const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: (req, res) => {
    Category.find()
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },

  addCategories: (req, res) => {
    Category.create({
      categoryName: req.body.categoryName,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
    
  },

  deleteCategories: (req, res) => {
    Category.findByIdAndRemove(req.param.id)
    .then(() =>  res.json("Новость удалена"))
    .catch((error) => res.json(error))
  },
};
