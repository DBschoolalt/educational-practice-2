import { ProductManager } from "../dist/productmanager.js";
import { CustomerManager } from "../dist/customermanager.js";
import { ProductData } from "../dist/productdata.js";
import { CustomerData } from "../dist/customerdata.js";
import fs from 'fs';


describe('ProductData', function() {
	it('should be able to get the product data', function() {
		expect( ProductData.read() ).toEqual( JSON.parse(fs.readFileSync('./data/productdata.json', 'utf8')) );
	});
});
describe('CustomerData', function() {
	it('should be able to get the customer data', function() {
		expect( CustomerData.read() ).toEqual( JSON.parse(fs.readFileSync('./data/customerdata.json', 'utf8')) );
	});
});


describe('ProductManager', function() {
	let productmanager;
	let productdata;

	beforeEach(function() {
		productmanager = new ProductManager();
		productdata = [
		{"id":1,"name":"product1","price":1,"amount":1},
		{"id":2,"name":"product2","price":2,"amount":2},
		{"id":3,"name":"product3","price":3,"amount":3},
		{"id":4,"name":"product4","price":4,"amount":4}]
	});

	it('should be able to load items', function() {
		productmanager.load(productdata);
		expect( productmanager.get_all() ).toEqual( productdata );
	});

	it('should be able to add items', function() {
		productmanager.add({"id":5,"name":"product5","price":5,"amount":5});
		expect( productmanager.get_all() ).toEqual( [{"id":5,"name":"product5","price":5,"amount":5}] );
	});

	it('should be able to remove items', function() {
		productmanager.load(productdata);
		productmanager.remove(4);
		expect( productmanager.get_all() ).toEqual([
			{"id":1,"name":"product1","price":1,"amount":1},
			{"id":2,"name":"product2","price":2,"amount":2},
			{"id":3,"name":"product3","price":3,"amount":3}]);
	});

	it('should be able to find items', function() {
		productmanager.load(productdata);
		expect( productmanager.find(2) ).toEqual(1);
	});

	it('should be able to get items', function() {
		productmanager.load(productdata);
		expect( productmanager.get(2) ).toEqual({"id":2,"name":"product2","price":2,"amount":2});
	});

	it('should be able to change item name', function() {
		productmanager.load(productdata);
		productmanager.change_name(2, 'item2')
		expect( productmanager.get(2).name ).toEqual( "item2" );
	});
});

describe('CustomerManager', function() {
	let customermanager;
	let customerdata;

	beforeEach(function() {
		customermanager = new CustomerManager();
		customerdata = [
			{"id":0,"name":"","cart":{"items":[]}},
			{"id":1,"name":"customer1","cart":{"items":[
				{"id":1,"name":"product1","price":1,"amount":1},
				{"id":2,"name":"product2","price":2,"amount":2},
				{"id":3,"name":"product3","price":3,"amount":3}]}},
			{"id":2,"name":"customer2","cart":{"items":[
				{"id":1,"name":"product1","price":1,"amount":1},
				{"id":2,"name":"product2","price":2,"amount":2},
				{"id":3,"name":"product3","price":3,"amount":3}]}}
			]
	});

	it('should be able to load customers', function() {
		customermanager.load(customerdata);
		expect( customermanager.get_all() ).toEqual( customerdata );
	});

	it('should be able to add customers', function() {
		customermanager.add(
			{"id":1,"name":"customer1","cart":{"items":[
				{"id":1,"name":"product1","price":1,"amount":1},
				{"id":2,"name":"product2","price":2,"amount":2},
				{"id":3,"name":"product3","price":3,"amount":3}]}});
		expect( customermanager.get_all() ).toEqual([
			{"id":0,"name":"","cart":{"items":[]}},
			{"id":1,"name":"customer1","cart":{"items":[
				{"id":1,"name":"product1","price":1,"amount":1},
				{"id":2,"name":"product2","price":2,"amount":2},
				{"id":3,"name":"product3","price":3,"amount":3}]}}
			]
			);
	});

	it('should be able to remove customers', function() {
		customermanager.load(customerdata);
		customermanager.remove(2);
		expect( customermanager.get_all() ).toEqual([
			{"id":0,"name":"","cart":{"items":[]}},
			{"id":1,"name":"customer1",
				"cart":{"items":[
						{"id":1,"name":"product1","price":1,"amount":1},
						{"id":2,"name":"product2","price":2,"amount":2},
						{"id":3,"name":"product3","price":3,"amount":3}]
				}
			}]);
	});

	it('should be able to find customers', function() {
		customermanager.load(customerdata);
		expect( customermanager.find(1) ).toEqual(1);
	});

	it('should be able to get customers', function() {
		customermanager.load(customerdata);
		expect( customermanager.get(1) ).toEqual({"id":1,"name":"customer1",
				"cart":{"items":[
						{"id":1,"name":"product1","price":1,"amount":1},
						{"id":2,"name":"product2","price":2,"amount":2},
						{"id":3,"name":"product3","price":3,"amount":3}]
				}
			});
	});

	it('should be able to change customer name', function() {
		customermanager.load(customerdata);
		customermanager.change_name(1, 'item2')
		expect( customermanager.get(1).name ).toEqual( "item2" );
	});
});
