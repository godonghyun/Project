// const axios = require('axios');
// const Configs = require('../../configs')
const data = require('./data')

exports.store = async (req, res, next) => {
  try {
      const item = data['DATA']
      res.send(item)
  }
  catch(error){
      next(error);
  }
}