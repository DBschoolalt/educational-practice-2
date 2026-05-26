import { Product } from "./product.js"

export class ProductManager {
	_products: Product[];
	constructor() {
		this._products = [];
	}

	load(data: Product[]): void {
		this._products = data
	}

	find(id: number): number {
		let found_item = this._products.findIndex(item => item.id === id);
		if (found_item) {
			return found_item
		}
		return -1
	}
	get(id: number): Product {
		let found_item = this._products.find(item => item.id === id);
		if (found_item) {
			return found_item
		}
		return { id: -1, name: 'no product', price: 0, amount: 0 }
	}

	add(product: Product): void {
		let found_index = this.find(product.id)
		if (found_index == -1) {
			this._products.push(product);
		} else {
			this._products[found_index] = product
		}
	}

	change_price(id: number, price: number): void {
		let index = this.find(id);
		if (price < 0) {
			price = 0
		}
		if (index != -1) {
			this._products[index].price = price
		}
	}

	change_name(id: number, name: string): void {
		let index = this.find(id);
		if (index != -1) {
			this._products[index].name = name
		}
	}

	change_amount(id: number, amount: number): void {
		let index = this.find(id);
		if (index != -1) {
			if (amount < 0) {
				amount = 0
			}
			this._products[index].amount = amount
		}
	}

	remove(id: number): void {
		let index = this.find(id)
		if ( index != -1 ) {
			this._products.splice(index, 1);
		}
	}

	get_all(): Product[] {
		return this._products;
	}
}