import './App.css'
import Counter from "./components/Counter"
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useEffect, useState, useRef } from 'react'
import Even from './components/Even'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트-탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  //2, 업데이트시
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
    }
    console.log("update");
  });   //[]가 생락되면 update

  //3. 언마운드-죽음
  const onClickButton = (value) => {
    setCount(count + value);
  };


  return (

    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="입력된 값이 Viewer에 출력됩니다"
        />
      </section>
      <section>
        {/* Viewer에 input도 전달 */}
        <Viewer count={count} input={input} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};


export default App


// const [count, setCount] = useState(0);
// const [isVisible, setIsVisible] = useState(0);    //초기값: false

// const handleButtonClick = (value) => {
//   setCount(count + value);
// }

// //useEffect: count 값이 변경될 때 자동으로 로그 출력 및 언마운트 시 메모리 청소
// useEffect(() => {
//   //실행할 코드
//   console.log(`Count 값이 변경되었습니다: ${count}`);

//   //정리 함수
//   return () => {
//     console.log("컴포넌트가 곧 언마운트됩니다");
//   };
//   //[]안에는 변경이 감지되면 자동 변경
// }, [count]);    //[count]: 의존성 배열로 count값이 변경될 때만 useEffect 작동되로고 제한

// return (
//   <>
//     <div className="App">
//       <h1>Simple Counter</h1>
//       <section>
//         <button onClick={() => setIsVisible(!isVisible)}>
//           {isVisible ? "Hide" : "Show"} Counter
//         </button>
//       </section>
//       <section>
//         {/* 조건부 렌더링 */}
//         {/* isVisible이 true일 경우 <Viewer count={count}가 렌더링 */}
//         {isVisible && <Viewer count={count} />}
//       </section>


//       <section>
//         <Controller onClickButton={handleButtonClick} />
//       </section>
//     </div>
//   </>
// );