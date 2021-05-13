import json
import numpy as np
import operator
from __PriceData__ import makePriceData

def makeAverageData():
  price_data = dict()
  check_product = dict()
  with open("./json/PRICE_DATA.json", "r") as price_json:
    price_data = json.load(price_json)
  with open("./json/default/check_product.json", "r") as check_json:
    check_product = json.load(check_json)
  # 각 항목별 수량체크
  # cat = dict()
  # for price in price_data['DATA']:
  #   items = price['items']
  #   for i in items:
  #     name = i['name']+','+i['unit']+','+i['etc']
  #     if name not in cat.keys():
  #       cat[name] = 1
  #     else:
  #       cat[name] += 1
  # sdict= sorted(cat.items(), key=operator.itemgetter(0))
  # for key, item in sdict:
  #   if item > 10:
  #     print(key, item)
  
  # # 실제 저장할 Average Price (Median 값 사용)
  category = check_product
  for price in price_data['DATA']:
    for p in price['items']:
      name = p['name']
      for c in category['DATA']:
        if name == c['name']:
          c['price'].append(p['price'])

  for c in category['DATA']:
    c['price'] = np.median(c['price'])
  
  print(category['DATA'])

  AVERAGE_DATA = category
  with open('./json/AVERAGE_DATA.json', 'w', encoding='utf-8') as make_file:
    json.dump(AVERAGE_DATA, make_file, indent="\t", ensure_ascii=False)
