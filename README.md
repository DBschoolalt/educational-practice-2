# Usage

to use any of these you must go the following route in your web browser

`/products` - get list of all products

`/products/:id` - get product with specified id

`/customers` - get list of all customers

`/customers/save` - save customer data to persistent data

`/customers/load` - load customer data from persistent data

`/customers/:id` - get customer with specified id

`/customers/:id/add_to_cart/:product_id` - add item to cart of customer with specified id

`/customers/:id/remove_from_cart/:product_id` - remove item from cart of customer with specified id

`/customers/:id/clear_cart` - clear cart of customer with specified id


# Build instructions

This project is built with Node.js, make sure you have all dependencies installed.

Open terminal in project folder and run `build` with npm

```
npm run build
```

Your compiled typescript should be locked in `dist` folder of the project

# Run instructions

Make sure you have compiled the project beforehand, open terminal in project folder and use the `run` command with npm

```
npm run run
```

Alternatively, open the `run.bat` file, this will compile and run the project for you.

# Using the unit-tests

you must have `jasmine` installed before you can do the unit tests.

Open terminal in project folder and run `test` with npm

```
npm test
```

Alternatively you can just open the `test.bat` file.
