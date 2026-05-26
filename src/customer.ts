import { Cart } from "./cart.js"

export type Customer = {
	id: number;
	name: string;
	cart: Cart;
}