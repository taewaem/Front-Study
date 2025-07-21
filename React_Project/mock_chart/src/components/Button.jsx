import '../styles/Button.css';

function Button({children, onClick, type = 'primary', disabled = false}){ 

    //type에 따라 css 동적으로 결정
    const getButton = () => {
        const base = 'button';
        const tp = `button-${type}`;
        return `${base} ${tp}`;
    };


    const handleClick = (event) => {
    if (disabled) {
      return; // disabled면 아무것도 하지 않음
    }
    
    if (onClick) {
      onClick(event); // onClick이 있을 때만 실행
    }
  };

  return (
    <button
      className={getButton()}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

}

export default Button;


/**
 * 알아야 할 부분들
1. Props 구조
   - children: 버튼 안의 텍스트나 내용
   - onClick: 클릭했을 때 실행할 함수
   - type: 버튼 스타일 ('primary', 'buy', 'sell')
   - disabled: 버튼 비활성화 여부

2. 기본값 설정
   - type = 'primary': type을 안 넘겨주면 기본값 사용
   - disabled = false: 기본적으로는 활성화 상태

3. 클래스명 동적 생성
   - getButton() 함수로 type에 따라 다른 CSS 클래스 적용

4. 조건부 실행
   - disabled 상태일 때는 onClick 실행 안함
   - onClick이 없을 때도 에러 없이 처리

5. 사용 예시:
   <Button onClick={() => console.log('클릭!')}>기본 버튼</Button>
   <Button type="buy" onClick={handleBuy}>매수</Button>
   <Button type="sell" disabled={true}>매도 (비활성화)</Button>
 */