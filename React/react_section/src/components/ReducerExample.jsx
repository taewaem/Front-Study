import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

const ReducerExample = () =>{
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
        <p>카운트: {count}</p>
        <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        </>
    )
}

export default ReducerExample;

/*
복잡한 상태 로직을 간결하게 관리할 수 있는 Hook
→ useState보다 조건이 많거나 상태가 복잡할 때 사용
*/