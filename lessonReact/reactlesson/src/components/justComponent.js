import { useState } from "react"

// component - name must start with capital letter
function Component1() {
	return (
		<>
			<h1>Component1 starts here</h1>
			<p>This is from Component1</p>
			<div>
				<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
					Click here to go to Google
				</a>
			</div>
			<p>Component1 ends here</p>
		</>
	)
}
export { Component1 }
// React Fragment <> </>