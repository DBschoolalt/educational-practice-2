import { Product } from "./product.js"
import { Cart } from "./cart.js"
import { Customer } from "./customer.js"

export class CustomerManager {
	_customers: Customer[];

	constructor() {
		this._customers = [{id: 0, name: '', cart:{items:[]}}];
	}

	load(data: Customer[]): void {
		this._customers = data
	}

	find(id: number): number {
		let index = this._customers.findIndex(item => item.id === id);
		if (index) {
			return index
		}
		return -1
	}

	get(id: number): Customer {
		let item = this._customers.find(item => item.id === id);
		if (item) {
			return item
		}
		return { id: -1, name: 'no customer', cart: { items: [] } }
	}

	add(customer: Customer): void {
		let index = this.find(customer.id)
		if (index == -1) {
			this._customers.push(customer);
		} else {
			this._customers[index] = customer
		}
	}

	remove(id: number): void {
		let index = this.find(id)
		if ( index != -1 ) {
			this._customers.splice(index, 1);
		}
	}

	change_name(id: number, name: string): void {
		let index = this.find(id);
		if (index != -1) {
			this._customers[index].name = name
		}
	}

	add_to_cart(id: number, item: Product): void {
		let index = this.find(id)
		if (index != -1) {
			item.amount = 1
			this._customers[index].cart.items.push(item);
		}
	}

	remove_from_cart(id: number, product_id: number): void {
		let index = this.find(id)
		if (index != -1) {
			let item_index = this._customers[index].cart.items.findIndex(item => item.id === product_id)
			if (item_index) {
				this._customers[index].cart.items.splice(item_index, 1);
			}
		}
	}

	clear_cart(id: number): void {
		let index = this.find(id);
		if (index != -1) {
			this._customers[index].cart.items.splice(0, this._customers[index].cart.items.length);
		}
	}

	get_cart_items(id: number): Product[] {
		let index = this.find(id);
		if (index != -1) {
			return this._customers[index].cart.items
		}
		return []
	}

	get_cart_price(id: number): number {
		let index = this.find(id);
		let price = 0
		if (index != -1) {
			for (const item of this._customers[index].cart.items) {
				price = price + item.price
			}
			return price
		}
		return 0
	}
	get_all(): Customer[] {
		return this._customers;
	}
}