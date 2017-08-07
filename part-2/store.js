#!/usr/local/bin/node

const db = require('./database');
const { listProducts, listOrders, listRealShoppers, errorHandler } = require('./helper-functions/helper-functions');

switch (process.argv[2]) {
  case 'product-list':
    db.productList(process.argv[3])
      .then(listProducts)
      .catch(errorHandler);
    break;
  case 'shopper-orders':
    db.shopperOrders(process.argv[3])
      .then(listOrders)
      .catch(errorHandler);
    break;
  case 'real-shoppers':
    db.realShoppers()
      .then(listRealShoppers)
      .catch(errorHandler);
    break;
  default:
    console.log('Please enter a valid command.');
}
