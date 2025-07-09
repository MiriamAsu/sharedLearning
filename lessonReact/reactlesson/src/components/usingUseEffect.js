import { useState, useEffect } from "react";

// syntax
// useEffect(fxn, [dependencies]);

function UseEffectComponent() {
	const [data, setData] = useState(null);
	async function fakeApi() {
		try {
			const response = await fetch("https://fakestoreapi.com/products?limit=10",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const responseData = await response.json();
			setData(responseData);
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
	}

	useEffect(() => {
		fakeApi()
	}, []);

	console.log('data from fake api:', data);
	let [id, title, price, description, category, image, rating] = [null, null, null, null, null, null, null];

	// let [count, rate] = [null, null];
	// if (data) {
	// 	[id, title, price, description, category, image] = Object.values(data);
	// 	// [count, rate] = rating;
	// 	console.log('the response data:\n', data)
	// }

	return (
		<>
			{data ?
			(
				// this is for an array of objects from fake API
				data?.map((item, index) => {
					[id, title, price, description, category, image, rating] = Object.values(item);
					const {count, rate} = rating;
					// console.log('count:', {count}, '\nrate:', {rate})
					return (
						<div key={index} className="useEffectComponent">
							<h4>UseEffectComponent starts here</h4>
							<h5>Title: {title} <span>ID: {id}</span></h5>
							<img src={image} alt={title} />
							<p>price is N{price} <span>Rating: {rate} - by: {count}</span></p>
							<h6>Category: {category}</h6>
							<div className="details">
								<p>Details: {description}</p>
							</div>
							<p>UseEffectComponent ends here</p>
							<hr />
						</div>
					);
				}
			))
			// this is for a single object from fake API
			// <div className="useEffectComponent">
			// 	<h4>UseEffectComponent starts here</h4>
			// 	<h5>Title: {title} <span>ID: {id}</span></h5>
			// 	<img src={image} alt={title} />
			// 	<p>price is N{price}</p>
			// 	<h6>Category: {category}</h6>
			// 	<div className="details">
			// 		<p>Details: {description}</p>
			// 	</div>
			// 	<p>UseEffectComponent ends here</p>
			// </div>
			: undefined
			}
		</>
	);
}
// export { UseEffectComponent }; // named export
export default UseEffectComponent; // default export


// [] - Empty dependency array means this effect runs once on mount and cleanup on unmount
// [var1, var2] - If you add dependencies, the effect will run when those dependencies change
// If you don't provide a dependency array, the effect runs after every render


// condition ? a : b

// if (condition) {
// 	a
// } else {
// 	b
// }

// array.map((item) => {})

// true && a // if condition is true, execute a
