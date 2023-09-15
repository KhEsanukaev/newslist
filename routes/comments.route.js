const { Router } = require('express');
const { commentController } = require('../controllers/comments.controller');

const router = Router();

router.get('/comments', commentController.getComments);

router.post('/comments', commentController.postComments);
router.delete('/comments', commentController.deleteComments);


module.exports = router;
