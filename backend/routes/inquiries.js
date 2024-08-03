const express = require('express');
const router = express.Router();
const { submitInquiry } = require('../controllers/inquiries');

router.post('/', submitInquiry);

module.exports = router;
     