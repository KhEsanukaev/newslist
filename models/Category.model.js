const mongoose = require("mongoose");

const categoryShema = mongoose.Schema({
  categoryName: String,
});

const Category = mongoose.model("Category", categoryShema);

module.exports = Category;
