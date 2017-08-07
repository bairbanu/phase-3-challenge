function listProducts(list) {
  console.log('| Product Name | Section');

  list.forEach((item) => {
    console.log(`| ${item.name} | ${process.argv[3]}`);
  })

  process.exit();
}

function listOrders(list) {
  console.log('| Order ID | Total Cost |');

  list.forEach((item) => {
    console.log(`| ${item.id} | ${item.sum}`);
  })

  process.exit();
}

function listRealShoppers(list) {
  console.log('| Shopper Name | Number of Orders');

  list.forEach((item) => {
    console.log(`| ${item.name} | ${item.count}`);
  })

  process.exit();
}

function errorHandler(err) {
  console.log('An error occured', err);
}

module.exports = { listProducts, listOrders, listRealShoppers, errorHandler };
