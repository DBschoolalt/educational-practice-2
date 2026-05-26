import fs from 'fs';
import { Product } from "./product.js"

export class ProductData {

	static data_location: string = "./data/productdata.json"

	static read(): Product[] {
		try {
			let data = fs.readFileSync(ProductData.data_location, 'utf8');
			console.log('Success reading JSON file for Product Data');
			return JSON.parse(data)
		} catch (error) {
			console.error('Error reading JSON file:', error);
		}
		return []
		
	}

	static write(data: Product[]): void {
		try {
			fs.writeFileSync(ProductData.data_location, JSON.stringify(data), 'utf8');
			console.log('Success writing JSON file for Product Data');
		} catch (error) {
			console.error('Error writing JSON file:', error);
		}
	}
}


