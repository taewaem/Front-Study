
import "./Main.css";

const Main = () => {

    // JSX주의사항
    //1. 중괄호 내부에는 자바스킯트 표현식만 넣을 수 있다.
    //2. 조건문은 사용할 수 없다.{if(){ } } {for(){}}
    //3. 숫자, 문자, 배열 값만 랜더링 된다.
    //4. {true}{null}{obj}{undefined}
    //5. 모든 태그는 반드시 닫혀 있어야 한다.
    //6. 최상위 태그는 반드시 하나여야만 한다.

    const user = { name: "KIM", isLogin: true, };

    //방법 1
    if (user.isLogin) {
        // return <div style={{backgroundColor:"red", borderBottom: "5px solid blue"}}>로그아웃</div>
        return <div className="logout">로그아웃</div>
    } else {
        return <div className="login">로그인</div>
    }


    //방법2
    // return(
    //     <>
    //     {user.isLogin?(<div>로그아웃</div>) : (<div>로그인</div>)}
    //     </>
    // );

    // return (
    //     <main>
    //         <h1>main</h1>
    //         <h2>{number}</h2>
    //         <h2>{number+10}</h2>
    //         {/* 리액트는 ===이 세 개 */}
    //         <h2>{number%2===0 ? "짝수" : "홀수"}</h2>
    //     </main>
    // );
};

export default Main
