import { useState, useRef } from "react";

let letCount = 0;

const CompareRefAndLet = () => {
    
    const[input, setInput] = useState("");
    const refCount = useRef(0); //useRef로 수정 횟수 카운트
    let letCount = 0;       

    const handleChange = (e) => {
        setInput(e.target.value);
        refCount.current++;     //유지됨
        letCount++;             //매 렌더링마다 초기화됨

        console.log("useRef count: ", refCount.current);
        console.log("let count: ", letCount);
    };

    return (
        <div>
            <h2>useRef vs let 비교</h2>
            <input value={input} onChange={handleChange} placeholder="아무거나 입력"></input>
            <p>현재 입력: {input}</p>
            <p>refCount (useRef): {refCount.current}</p>
            <p>letCount (let): {letCount}</p>
        </div>
    );
};

export default CompareRefAndLet