const mongoose = require('mongoose');

const newsShema = mongoose.Schema({
    title: String,
    text: String,
    categoryId: mongoose.SchemaTypes.ObjectId
    
  });
  
  const News = mongoose.model('News', newsShema);
  
  module.exports = News;