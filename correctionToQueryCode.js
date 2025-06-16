#!/usr/bin/env node

async function correctQueryCode() {
	try {
		const response = await fetch('https://fakestoreapi.com/products/1/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: null
		})
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log(`API Test Successful with status code of: ${response.status}\n${JSON.stringify(data, null, 4)}`);
	} catch (error) {
		console.error('API Test Failed:', error);
	}
}
correctQueryCode();