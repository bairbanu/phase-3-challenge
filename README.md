## General Requirements

- [x] __10:__ Solution is in a public repository called `phase-3-challenge`.
- [x] __10:__ Solution repository has 3 folders: `part-1`, `part-2`, and `part-3`.
- [x] __10:__ Solution repository includes a `.gitignore` ignoring files that don't shouldn't be committed (e.g. `node_modules/`, `*.log` files).
- [x] __10:__ Parts 1 and 2 have their own `package.json` specifying dependencies.
- [ ] __20:__ Git history shows frequent commits.

## Part 1: Simple web app

### Requirements

- [x] __10:__ All files are stored under the `part-1/` folder
- [x] __10:__ All dependencies are specified in a `package.json` file
- [x] __10:__ Web server can be started with `npm start` command
- [x] __20:__ GET requests to the `/api/days/:day` route responds with  content type `application/text`, as described in the example above
- [x] __80:__ POST requests to the `/api/array/concat`, concatenates the two arrays provided in the request body and responds with the result. An invalid array should return a 400 response.

## Part 2: Command Line Grocery Store

### Requirements
- [x] __10:__ All files are stored under the `part-2/` folder
- [x] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [x] __10:__ SQL script to insert [grocery seed data][grocery-data] and load from CSV is created in a file `load-data.sql`
- [x] __10:__ SQL statements to insert data into the `orders` and `shoppers` table is added to the file `load-data.sql`. (Add at least 5 rows in each table)
- [x] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [x] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios
- [x] __10__: As a shopper I can fetch all my orders
- [x] __10__: As a shopper I can have multiple items in an order. (Assume the quantity of each item is always 1)

Command line interface requirements
- [x] __10__: Create a command line Node script called `store.js`
- [x] __20__: Command `product-list` has been implemented
- [x] __40__: Command `shopper-orders` has been implemented
- [x] __30__: Command `real-shoppers` has been implemented

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:
- [x] __20__: The database function for the command `product-list` is tested
- [x] __20__: The database function for the command `shopper-orders` is tested
- [x] __20__: The database function for the command `real-shoppers` is tested

## Part 3: Web interface for grocery store

### Requirements

- [ ] __10:__ All files are stored under the `part-3/` folder
- [ ] __20:__ No third party CSS or JS libraries are used (all code must be written from scratch)
- [ ] __10:__ HTML, CSS, and JS are separated into their own files.
- [ ] __20:__ Clicking on a section in the "Sections" sidebar will jump to that section in the page
- [ ] __20:__ Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
- [ ] __20:__ Clicking on the "Cart" button will show the cart modal with a list of all items added
- [ ] __20:__ Clicking on the "Clear" button in the cart modal removes all items from the cart
- [ ] __20:__ Clicking on the "X" button in the cart modal closes the modal
- [ ] __20:__ The "Total" in the cart modal shows the calculated sum of all item prices
