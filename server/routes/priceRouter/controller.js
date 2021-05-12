const axios = require('axios');
const Configs = require('../../configs')
const data = require('./data')

const GU_DATA = require('./data/preprocess/json/GU_DATA.json')
const MARKET_DATA = require('./data/preprocess/json/MARKET_DATA.json')
const PRICE_DATA = require('./data/preprocess/json/PRICE_DATA.json')

exports.getPriceAll = async (req, res, next) => {
  try {
      const items = PRICE_DATA['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getPriceAverage = async (req, res, next) => {
  try {
      const items = PRICE_DATA['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}