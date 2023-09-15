const mongoose = require('mongoose');

const commentsShema = mongoose.Schema({
    autor: String,
    text: String,
    newsId: { 
      type: mongoose.SchemaTypes.ObjectId,
      ref: "News"
    }
    
  });
  
  const Comment = mongoose.model('Comment', commentsShema);
  
  module.exports = Comment;
