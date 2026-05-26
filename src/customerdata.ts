import fs from 'fs';
import { Customer } from "./customer.js"

export class CustomerData {

	static data_location: string = "./data/customerdata.json"

	static read(): Customer[] {
		try {
			let data = fs.readFileSync(CustomerData.data_location, 'utf8');
			console.log('Success reading JSON file for Customer Data');
			return JSON.parse(data)
		} catch (error) {
			console.error('Error reading JSON file:', error);
		}
		return []
		
	}

	static write(data: Customer[]): void {
		try {
			fs.writeFileSync(CustomerData.data_location, JSON.stringify(data), 'utf8');
			console.log('Success writing JSON file for Customer Data');
		} catch (error) {
			console.error('Error writing JSON file:', error);
		}
	}
}