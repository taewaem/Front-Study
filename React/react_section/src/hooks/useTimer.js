//useTimer.js

import { useState, useRef } from "react";

function useTimer() {
    //화면에 뿌릴 타이머 구현하기 위함
    const [seconds, setSeconds] = useState(0);
    
    //리렌더링이 없이 값을 보존
    //ID를 저장해서 멈추거나 초기화할 때 사용하기 위함
    const intervalRef = useRef(null);

    const start = () => {
        if (intervalRef.current !== null) return; //이미 시작된 경우 방지
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    return { seconds, start, stop, reset };
}