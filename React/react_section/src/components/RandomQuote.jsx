import { useState, useEffect } from "react";

const quotes = [
  "행동이 모든 것을 바꾼다.",
  "오늘의 노력이 내일의 나를 만든다.",
  "포기하지 마라, 끝까지 가라.",
  "목표 없는 열정은 의미가 없다.",
  "흐름을 믿고 앞으로 나아가라.",
];

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  // 컴포넌트가 마운트되자마자 1회 실행
  useEffect(() => {
    console.log("useEffect 실행!");
    pickRandomQuote();
  }, []);

  const pickRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>오늘의 명언</h2>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>{quote}</p>
      <button onClick={pickRandomQuote}>다른 명언 보기 </button>
    </div>
  );
};

export default RandomQuote;
