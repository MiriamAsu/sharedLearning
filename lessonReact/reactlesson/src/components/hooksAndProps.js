import { useState } from "react"

// component - name must start with capital letter
function Component1() {
	const [two, setTwo] = useState(2) // state variable
	useComponent1() // calling the hook inside the component
	return (
		null
	)
}

// hooks - name must start with "use"
function useComponent1() {
	const [one, setOne] = useState(1) // state variable
	const arr = [1, 2, 3, 4, 5]
	console.log('arr:', arr)
	const num = arr.map(item => item * 2)
	console.log('num:', num)
	return (num)
}
Component1()

// difference between components and hooks

// react hooks
// 1. useState
// 2. useEffect
// 3. useRef
// 4. useContext
// 5. useReducer
// 6. useMemo