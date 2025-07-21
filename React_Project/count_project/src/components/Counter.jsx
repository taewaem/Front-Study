import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    console.log(count);

    const incrementCount = () => {
        setCount(count + 1);

    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>Current count: {count}</h2>
            <button onClick={incrementCount}>
                increment
            </button>

        </div>
    )
}

export default Counter