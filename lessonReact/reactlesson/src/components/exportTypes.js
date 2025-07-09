// You can have multiple named exports in a single file
// You can have one default export in a single file

function component1 () {
	return "This is component 1";
}
export { component1 }; // named export

function component2 () {
	return "This is component 2";
}
export { component2 }; // named export


function component3 () {
	return "This is component 3";
}
// export default component3; // default export
export { component3 }; // named export


function component4 () {
	return "This is component 4";
}
export { component4 }; // named export


function component5 () {
	return "This is component 5";
}
export { component5 }; // named export