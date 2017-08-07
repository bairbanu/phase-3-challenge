const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
};

const pgp = require('pg-promise')();
const db = pgp(connection);

function productList(section) {
  return db.any('SELECT name FROM grocery_items WHERE section = $1', [section]);
}

function shopperOrders(shopper_id) {
  return db.any(`SELECT orders.id, SUM(CAST(grocery_items.price AS REAL))
    FROM orders
    INNER JOIN grocery_items ON orders.item_id = grocery_items.id
    WHERE shopper_id = 3
    GROUP BY orders.id`, [shopper_id]);
}

function realShoppers() {
  return db.any(`SELECT shoppers.name, COUNT(DISTINCT orders.id)
    FROM orders
    INNER JOIN shoppers ON orders.shopper_id = shoppers.id
    GROUP by shoppers.name`);
}

module.exports = { productList, shopperOrders, realShoppers };
