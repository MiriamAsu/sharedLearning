

const getEndpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=3'
const methodType = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    body: null,
}

async function fetchApi(){
    try{
        const response = await fetch(getEndpoint, methodType);
        if(!response.ok){
            throw new error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`API Test is successful with the status code of: ${response.status}/n${JSON.stringify(data, null, 4)}`);
    }catch(error){
        console.error('API Test failed:',error);
    }
}
fetchApi();
