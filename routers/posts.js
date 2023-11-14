const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.index);
router.get('/create', postsController.create);
router.get('/:slug/download', postsController.download);
router.get('/:slug', postsController.show);
router.post('/', postsController.store);
router.delete('/:slug', postsController.destroy);

module.exports = router;
