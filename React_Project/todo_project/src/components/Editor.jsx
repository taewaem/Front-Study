import { useRef, useState } from "react";
import "./Editor.css";

//onCreate함수는 부모 컴포넌트로부터 전달받는 props
const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeydown = (e) => {
        //e.keyCode === 13은 Enter키
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); //내용 입력칸 초기화
    }

    return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;