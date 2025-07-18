import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'
import Bulb from './components/Bulb'
import Counter from './components/Counter'
import Register from "./components/Register"
import './App.css'
import CompareRefAndLet from './components/CompareRefAndLet'
import TypingGame from './components/TypingGame'
import ClickCounter from './components/ClickCounter'
import EffectExample from './components/EffectExample'
import RandomQuote from './components/RandomQuote'
import ContextExample from './components/ContextExample'
import ReducerExample from './components/ReducerExample'
import CallbackExample from './components/CallbackExample'
import LayoutEffectExample from './components/LayoutEffectExample'
import MemoExample from './components/MemoExample'


/*
const header=() =>{
}
  function hedaer() 와 같은 의미
*/

// #2
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }


// function App() {
//   const [count, setCount] = useState(0)

//   const buttonProps={text:"메일", color:"red", a:1,b:2,c:3}
//   // ... -> 전개 연산자(Spread Operator)
//   return (
//     <>
//       <Button {...buttonProps}/>
//       <Button text={"카페"} />
//       <Button text={"블로그"} >
//       {/* <div>자식요소</div> */}
//       <Header />
//       </Button>
//     </>
//   )
// }

// function App() {

//   // const [state, setState] = useState(0);
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState("off");

//   console.log(count);
//   console.log(light);
//   return (
//     <>
//       {/* <h1>{state}</h1>
//       <button onClick={() => {
//         setState(state + 1);
//       }}
//       >
//         +</button>
//          */}

//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>
//         +
//       </button>
//       <hr />
//       <div>
//         <h1>{light}</h1>
//         <button onClick={() => {
//           setLight(light === "ON" ? "OFF" : "ON")
//         }}
//         >
//           {light === "ON" ? "끄기" : "켜기"}
//         </button>
//       </div>

//     </>
//   )
// }

function App() {
  return (
    <>
      <ContextExample />
      <hr />
      <ReducerExample />
      <hr />
      <CallbackExample />
      <hr />
      <MemoExample />
      <hr />
      <LayoutEffectExample />
      <hr />
      
    </>


  )
}

export default App
