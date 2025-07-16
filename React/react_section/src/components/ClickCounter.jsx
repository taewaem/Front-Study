import { useState, useRef } from "react";

const ClickCounter = () => {

    const countRef = useRef(0);
    const [visibileCount, setVisibleCount] = useState(0); //실제 화면 출력용
    
    const handleClick = () => {
        countRef.current++;     //리렌더링 안됨
        console.log("총 클릭 수", countRef.current);
    };

    const showCount = () =>{
        setVisibleCount(countRef.current);
    }

    return (
        <div>
            <h2>클릭 카운터</h2>
            <button onClick={handleClick}>클릭하기</button>
            <button onClick={showCount}>지금까지 몇 번 클릭했을까?</button>
            <p>화면에 보이는 클릭 수: {visibileCount}</p>
        </div>
    )
}

export default ClickCounter