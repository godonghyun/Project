const axios = require('axios');
const Configs = require('../../configs')

exports.price = async (req, res, next) => {
  try {
      const priceDataUrl = `http://apis.data.go.kr/B552895/LocalGovPriceInfoService/getItemPriceResearchSearch?serviceKey=${Configs.priceOptions.serviceKey}&pageNo=${Configs.priceOptions.pageNo}&numOfRows=${Configs.priceOptions.numOfRows}&examin_de=${Configs.priceOptions.examin_de}&prdlst_cd=${Configs.priceOptions.prdlst_cd}&prdlst_nm=${Configs.priceOptions.prdlst_nm}`;
      axios.get(priceDataUrl)
      .then((response) => {
        const {
          data: {
            response: {
              body: {
                items: { item },
              },
            },
          },
        } = response;
        res.send(item);
      })
      .catch((e) => console.log(e));
  }
  catch(error){
      next(error);
  }
}