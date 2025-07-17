import { useCallback, useState } from "react";

//버튼 클릭 함수 메모이제이션
const CallbackExample = () => {

    const [count, setCount] = useState(0);

    //handleClick이라는 함수는 리렌더링 되어도 한 번만 만들어짐
    const handleClick = useCallback(() => {
        console.log("버튼 클릭!");

    }, [])      //의존성이 없으면 한 번만 생성됨

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+ {count}</button>
            <button onClick={handleClick}>클릭 로그</button>
        </>
    )
}

export default CallbackExample;