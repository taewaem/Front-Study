import { useMemo, useState } from "react";

const MemoExample = () =>{
    const [count, setCount] = useState(0);

    const heavyCalculation = (n) => {
        console.log("무거운 계산 중. . .");
        return n * 1000000;
    };

    const result = useMemo(() => heavyCalculation(count), [count]);

    return (
        <>
        <p>결과: {result}</p>
        <button onClick={() => setCount(count +1)}>계산</button>
        </>
    );
};


export default MemoExample;

/*
값을 기억(memoize)**해서 렌더링 때마다 불필요한 계산을 막는 Hook
→ 계산 비용이 큰 작업을 최적화할 때 사용
*/