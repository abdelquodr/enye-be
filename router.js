const express = require('express');
// const axios = require('axios')
const getLatestCurrencyRate = require('./controller')

const router = express.Router();

router.get('/rates', getLatestCurrencyRate)


module.exports = router