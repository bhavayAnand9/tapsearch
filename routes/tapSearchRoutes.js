const express = require('express');
const router = express.Router();
const tapSearchController = require('../controllers/tapSearchController');

router.delete('/clear', tapSearchController.clear);
router.post('/index', tapSearchController.index);
router.get('/search/:query', tapSearchController.search);

exports.routes = router;
