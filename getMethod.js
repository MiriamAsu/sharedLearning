#!/usr/bin/env node

const getEndpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=3'
const methodType = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	body: null
}

async function apiTest () {
	try {
		const response = await fetch(getEndpoint, methodType);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log(`API Test Successful with status code of: ${response.status}\n${JSON.stringify(data, null, 4)}`);
	} catch (error) {
		console.error('API Test Failed:', error);
	}
}
apiTest()

// methods:
// 1. GET - fetches data from the server
// 2. POST - fetch and send data to the server
// 3. PUT - replaces an existing data on the server
// 4. DELETE - removes data from the server
// 5. PATCH - replaces some of the data on the server


// response status codes:
// 1. 100
// 2. 200, 201, etc - success, the operation was successful
// 3. 300, 301, 302, etc - redirection, the requested resource has moved
// 4. 400, 401, 403, etc - client error, the request was invalid or unauthorized
// 5. 500, 501, 502, etc - server error, the server encountered an error while processing the request