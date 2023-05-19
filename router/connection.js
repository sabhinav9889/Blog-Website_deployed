const express = require('express');

const router = express.Router();

const {reqPostHandler, reqRemoveHandler} = require('../controller/url');

router.post('/compose', reqPostHandler);

// router.post('/remove', reqRemoveHandler);

module.exports = router;