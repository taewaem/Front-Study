import { useState, useRef } from "react";


const TypingGame = () => {
    const [text, setText] = useState("");
    const [startTime, setStartTime] = useState(null);
    const inputRef = useRef();

    const startGame = () => {
        setText("");
        setStartTime(Date.now());
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        setText(e.target.value);

        if (e.target.value === "hello world") {
            const endTime = Date.now();
            alert(`완료 소요시간: ${(endTime - startTime) / 1000}초`);
        }
    };

    return (
        <div>
            <h2>"hello world" 입력해보세요!</h2>
            <input
                ref={inputRef}
                value={text}
                onChange={handleChange}
                placeholder="여기에 입력하세요" />
            <br />
            <button onClick={startGame}>게임 시작</button>
        </div>
    )
}

export default TypingGame