const News = require("../models/News.model");

module.exports.newsController = {

    
  addNews: (req, res) => {
    const {title, text, categoryId} = req.body
    News.create({
      title,
      text,
      categoryId
    }).then((data) => {  
      res.json(data);
    });
  },
 

 

  deleteNews: (req, res) => {
    News.find().then(() => {
      res.json("новость удалена");
    });
  },

  putNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    });
  },

  getNewsByCategory: (req, res) => {
    News.find({categoryId: req.param.id}) 

     .then((data) => res.json(data))
     .catch((error) => res.json(error))
  },

  getNews: (req, res) => {
    News.find().then(() => {
      res.json("новость найдена");
    });
  },

  getNewsById: (req, res) => {
    News.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
  
  },

};
