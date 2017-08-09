function listProducts(list) {
  const headingLeft = 'Product Name';
  const headingRight = 'Section';
  const headingLengthLeft = headingLeft.length;
  const headingLengthRight = headingRight.length;
  let longestStringLeft = headingLengthLeft;
  let longestStringRight = headingLengthRight;

  list.forEach((item) => {
    if (item.name.length > longestStringLeft) {
      longestStringLeft = item.name.length;
    }
  })

  if (process.argv[3].length > headingLengthRight) longestStringRight = process.argv[3].length;

  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');
  console.log('| ' + headingLeft + ' '.repeat(longestStringLeft - headingLengthLeft) + ' | ' + headingRight + ' '.repeat(longestStringRight - headingLengthRight) + ' |');
  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');

  list.forEach((item) => {
    console.log('| ' + item.name + ' '.repeat(longestStringLeft - item.name.length) + ' | ' + process.argv[3] + ' '.repeat(longestStringRight - process.argv[3].length)  + ' |');
  })

  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');

  process.exit();
}

function listOrders(list) {
  const headingLeft = 'Order ID';
  const headingRight = 'Total Cost';

  console.log('+' + '-'.repeat(headingLeft.length + 2) + '+' + '-'.repeat(headingRight.length + 2) + '+');
  console.log('| ' + headingLeft + ' | ' + headingRight + ' |');
  console.log('+' + '-'.repeat(headingLeft.length + 2) + '+' + '-'.repeat(headingRight.length + 2) + '+');

  list.forEach((item) => {
    console.log('| ' + item.id + ' '.repeat(headingLeft.length - String(item.id).length) + ' | ' + item.sum + ' '.repeat(headingRight.length - String(item.sum).length)  + ' |');
  })

  console.log('+' + '-'.repeat(headingLeft.length + 2) + '+' + '-'.repeat(headingRight.length + 2) + '+');

  process.exit();
}

function listRealShoppers(list) {
  const headingLeft = 'Shopper Name';
  const headingRight = 'Number of Orders';
  const headingLengthLeft = headingLeft.length;
  const headingLengthRight = headingRight.length;
  let longestStringLeft = headingLengthLeft;
  let longestStringRight = headingLengthRight;

  list.forEach((item) => {
    if (item.name.length > longestStringLeft) {
      longestStringLeft = item.name.length;
    }
  })

  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');
  console.log('| ' + headingLeft + ' '.repeat(longestStringLeft - headingLengthLeft) + ' | ' + headingRight + ' '.repeat(longestStringRight - headingLengthRight) + ' |');
  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');

  list.forEach((item) => {
    console.log('| ' + item.name + ' '.repeat(longestStringLeft - item.name.length) + ' | ' + item.count + ' '.repeat(longestStringRight - item.count.length)  + ' |');
  })

  console.log('+' + '-'.repeat(longestStringLeft + 2) + '+' + '-'.repeat(longestStringRight + 2) + '+');

  process.exit();
}

function errorHandler(err) {
  console.log('An error occured', err);
}

module.exports = { listProducts, listOrders, listRealShoppers, errorHandler };

// code with node-print library looks like:

/*
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
*/
