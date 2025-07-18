import { useRef, useLayoutEffect, useState } from "react";

//브라우져에 뿌려지기 전에 동작
const LayoutEffectExample = () => {

    const boxRef = useRef();        //DOM 참조를 저장할 REF
    const [width, setWidth] = useState(0);      //너비 측정 시작


    //getBoundingClientReact().width : 화면 가로 측정
    useLayoutEffect(() => {
        setWidth(boxRef.current.getBoundingClientReact().width);
    }, []);

    return (
        <>
            {/* {ref: DOM 요소 직접 참조} */}
            <div ref={boxRef} style={{ width: "80%", border: "1px solid black" }}>
                너비 측정용 박스
            </div>
            <p>측정된 너비: {width}px</p>
        </>
    );
};

export default LayoutEffectExample;

/**
 * 컴포넌트가 렌더링된 후 특정 작업을 수행하도록 하는 Hook
 * -> 
 */