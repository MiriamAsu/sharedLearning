import { useState } from "react"

// hooks - name must start with "use"
function useCustomHook() {
	const [one, setOne] = useState(1) // state variable
	const arr = [1, 2, 3, 4, 5]
	console.log('arr:', arr)
	const num = arr.map(item => item * 2)
	console.log('num:', num)
	return (num)
}
export default useCustomHook
