const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();


router.post('/news', newsController.addNews);
router.delete('/news', newsController.deleteNews);
router.put('/news', newsController.putNews)
router.get('/news/:id', newsController.getNews);
router.get('/news', newsController.getNews)
router.get('/news/category/:id', newsController.getNews)

module.exports = router;
