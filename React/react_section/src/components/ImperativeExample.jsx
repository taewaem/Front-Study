import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyButton = forwardRef((props, ref) => {
    const btnRef = useRef();

    useImperativeHandle(ref, () => ({
        click: () => {
            btnRef.current.click();
        }
    }));
    
    return <button ref={btnRef} onClick={props.onClick}>자식 버튼</button>

});

const ImperativeExample = () => {
    const childRef = useRef();

    return (
        <>
        <FancyButton
        ref={childRef}
        onClick={() => alert("자식 버튼이 클릭됨!")}
        />
        <button onClick={() => childRef.current.click()}>자식 버튼 강제 클릭</button>
        </>
    );
};

export default ImperativeExample;

/* 
부모 컴포넌트가 자식의 특정 기능에 직접 접근할 수 있도록 하는 Hook
→ ref와 함께 사용 (커스텀 컴포넌트 ref 제어)
*/