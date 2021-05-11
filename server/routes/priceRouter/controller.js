const axios = require('axios');
const Configs = require('../../configs')
const data = require('./data')

exports.getPriceAll = async (req, res, next) => {
  try {
      const items = data['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}