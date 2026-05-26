import express from 'express';
import cors from "cors"
const app = express();
const port = 3000;

import { ProductManager } from "./productmanager.js";
import { CustomerManager } from "./customermanager.js";
import { ProductData } from "./productdata.js"
import { CustomerData } from "./customerdata.js"
const product_mngr = new ProductManager;
const customer_mngr = new CustomerManager;

// product_mngr.add( { id: 1, name: 'gold banana', price: 12.5, amount: 25 } );
// product_mngr.add( { id: 2, name: 'tiny apple', price: 5.9, amount: 140 } );
// product_mngr.add( { id: 3, name: 'chicken soup', price: 99.9, amount: 30 } );
// product_mngr.add( { id: 4, name: 'turkey soup', price: 101.9, amount: 1 } );

// customer_mngr.add({ id: 1, name: 'johnatan', cart:{items:[]} })
// customer_mngr.add({ id: 2, name: 'benjamin', cart:{items:[]} })
// customer_mngr.add_to_cart(1, product_mngr.get(3))
// customer_mngr.add_to_cart(1, product_mngr.get(3))
// customer_mngr.remove_from_cart(1, 3)
// customer_mngr.add_to_cart(1, product_mngr.get(2))
// customer_mngr.add_to_cart(1, product_mngr.get(1))
// customer_mngr.add_to_cart(2, product_mngr.get(3))
// customer_mngr.add_to_cart(2, product_mngr.get(1))

// ProductData.write(product_mngr.get_all())
product_mngr.load(ProductData.read())



//CustomerData.write(customer_mngr.get_all())
customer_mngr.load(CustomerData.read())


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Product Routes
app.get('/products', (req, res) => {
  res.json(product_mngr.get_all())
})
app.get('/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(product_mngr.get(id))
})

// Customer Routes
app.get('/customers', (req, res) => {
  res.json(customer_mngr.get_all())
})
app.get('/customers/save', (req, res) => {
  res.json(CustomerData.write(customer_mngr.get_all()))
})
app.get('/customers/load', (req, res) => {
  res.json(customer_mngr.load(CustomerData.read()))
})
app.get('/customers/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(customer_mngr.get(id))
})
app.get('/customers/:id/add_to_cart/:product_id', (req, res) => {
  let id = parseInt(req.params.id);
  let product_id = parseInt(req.params.product_id);
  res.json(customer_mngr.add_to_cart(id, product_mngr.get(product_id)))
})
app.get('/customers/:id/remove_from_cart/:product_id', (req, res) => {
  let id = parseInt(req.params.id);
  let product_id = parseInt(req.params.product_id);
  res.json(customer_mngr.remove_from_cart(id, product_id))
})
app.get('/customers/:id/clear_cart', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(customer_mngr.clear_cart(id))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// console.log(cdb.get(1).name)
// console.log(cdb.get_cart_items(1))
// console.log(cdb.get_cart_price(1))

// console.log(cdb.get(2).name)
// console.log(cdb.get_cart_items(2))
// console.log(cdb.get_cart_price(2))

