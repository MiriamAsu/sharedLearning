import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useCustomHook from './components/justProps';
import { Component1 } from './components/justComponent';
import { UseEffectComponent } from './components/usingUseEffect';
// import NAME_OF_FUNCTION from 'PATH_TO_FILE';


// first form of a function
// function name(parameters) {
//   // body of the function
//   return
// }

// second form of a function
// const name = (parameters) => {
//   // body of the function
//   return
// }

// third form of a function
// () => () - the () after the arrow indicates return
// () => {} - the {} braces indicates a block of code
const name = (parameters) => (null)

function App() {
  const [count, setCount] = useState(0);
  const ourHook = useCustomHook(); // using the custom hook
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseEffectComponent /> using the imported component
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{count}</p>

        <button
          onClick={() => setCount(count + 1)}>
          increment count
        </button>
        <button
          onClick={() => setCount(count - 1)}>
          decrement count
        </button>

        <p>{ourHook}</p> {/* using the imported custom hook */}
        <Component1 /> {/* using the imported component */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
				<p>
					<a
						className="App-link"
          	href="https://github.com/DafetiteOgaga/custom_commands"
          	target="_blank"
						rel="noopener noreferrer"
					>
          	Install more custom commands
					</a>
				</p>
      </header>
    </div>
  );
}

export default App;
