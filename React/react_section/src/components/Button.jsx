/*
//properties: 전달되는매개변수

const Button = (props) => {
    console.log(props);
    return <button style={{ color: props.color }}>
        {props.text} - {props.color}
    </button>

};
export default Button;

*/

import { Children } from "react";

//props 없이 버튼에 텍스트 적용


// //버튼 하위 자식 엘리먼트
// const Button = ({text, color, chidren}) => {

//     return <button style={{color}}>
//         {text} - {color.toUpperCase()}
//     </button>

// };

// export default Button;

//이벤트 객체
const Button = ({ text, color = "green", children }) => {
  const onClickButton = (e) => {
    alert(`Button clicked! You clicked on: ${e.target.textContent}`);
  };

  console.log("Button props:", { text, color, children });

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
