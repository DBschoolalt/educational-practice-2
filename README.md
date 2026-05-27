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

# API

## Types

### Product

Type that specifies product information

`id: number` - indetification number of the product, different products should not have same ID

`name: string` - name of the product

`price: number` - price of the product

`amount: number` - amount of the product, can only be 1 when present in cart

### Cart

Type that specifies cart information

`items: Product[]` - list of products in the cart

### Customer

Type that specifies customer information

`id: number` - indetification number of the customer, different customers should not have same ID

`name: string` - name of the customer

`cart: Cart` - shopping cart of the customer

## Classes

### Product Manager

class for managing product information

`load(data: Product[]): void` - loads given data

`find(id: number): number` - returns index of item with given id

`get(id: number): number` - returns item with given id

`add(product: Product): void` - add an item to data

`change_price(id: number, price: number): void` - change price of item with given id

`change_name(id: number, name: string): void` - change name of item with given id

`change_amount(id: number, amount: number): void` - change amount of item with given id

`remove(id: number): void` - remove item with given id

`get_all(): product[]` - returns list of all items

### Customer Manager

class for managing customer and cart information

`load(data: Customer[]): void` - loads given data

`find(id: number): number` - returns index of item with given id

`get(id: number): number` - returns item with given id

`add(customer: Customer): void` - add an item to data

`change_name(id: number, name: string): void` - change name of item with given id

`remove(id: number): void` - remove item with given id

`get_all(): Customer[]` - returns list of all items

`add_to_cart(id: number, item: Product): void` - adds given product to cart of customer with given id

`remove_from_cart(id: number, product_id: number): void` - removes first product with given product_id from cart of customer with given id

`clear_cart(id: number): void` - remove all items from cart of customer with given id

`get_cart_items(id: number): Product[]` - returns list of all items from cart of customer with given id

`get_cart_price(id: number): number` - returns price sum of all times in cart of customer with given id

### Product Data

class for managing persistent data of products, data is saved and read from data/productdata.json

`read(): Product[]` - returns all product data from saved

`write(data: Product[]): void` - saves given data to saved product data

### Customer Data

class for managing persistent data of customers, data is saved and read from data/customerdata.json

`read(): Customer[]` - returns all customer data from saved

`write(data: Customer[]): void` - saves given data to saved customer data

