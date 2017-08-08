const print = require('node-print');

function listProducts(list) {
  const processedList = [];

  list.forEach((item) => {
    processedList.push({ "Product Name": item.name, "Section": process.argv[3]});
  })

  print.pt(processedList);
  process.exit();
}

function listOrders(list) {
  const processedList = [];

  list.forEach((item) => {
    processedList.push({"Order ID": item.id, "Total Cost": item.sum});
  })

  print.pt(processedList);
  process.exit();
}

function listRealShoppers(list) {
  const processedList = [];

  list.forEach((item) => {
    processedList.push({"Shopper Name": item.name, "Number of Orders": item.count});
  })

  print.pt(processedList);
  process.exit();
}

function errorHandler(err) {
  console.log('An error occured', err);
}

module.exports = { listProducts, listOrders, listRealShoppers, errorHandler };
