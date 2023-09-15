const Comment = require("../models/Comment.model");

module.exports.commentController = {
  getComments: (req, res) => {
    Comment.findById(req.param.id)
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },

  postComments: (req, res) => {
    Comment.create({
      autor: req.body.autor,
      text: req.body.text,
      newsId:req.body.newsId,
    }).then((data) => {
      res.json(data);
    });
  },

  deleteComments: (req, res) => {
    Comment.find({ categoryId: req.param.id })

      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },
};
