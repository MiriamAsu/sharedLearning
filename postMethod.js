const notepad = JSON.stringify({
	title: 'Daily Affirmation',
	body: 'I am kind, strong and beautiful',
	userId: 1
})
const postEndpoint = 'https://pokeapi.co/api/v2/ability'
const methodType = {
	method: 'POST',
	headers:{
		'content-type': 'application/json',
	},
	body: notepad
}

async function serverPokemon() {
	try{
		const response = await fetch(postEndpoint, methodType);
		if(!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			console.log(`API Test Successful with status code of: ${response.status}/n${JSON.stringify(data, notepad, 4)}`);
	}catch (error){
		console.error(`API Test Failed`, error);
	}
}
serverPokemon();