import { createContext, useContext } from "react"


const UserContext = createContext();     //createContext(): Context 공간 생성(서랍장)

//자식 컴포넌트
//const Profile = (props)로 넘기는 기능을 생략
const Profile = () => {
    const user = useContext(UserContext);       //useContext: 문서 읽기
    return <p>안녕하세요, {user.name}님!</p>;
}

//부모 컴포넌트
const ContextExample = () => {
    //user 객체를 만들고 UserContext.Provider로 전달
    const user = { name: "kim" };

    return (

        //Provider : 서랍장에서 문서 꺼내기
        <UserContext.Provider value={user}>
            <Profile />
        </UserContext.Provider>
    )
}

export default ContextExample;

/* 
전역 데이터를 쉽게 전달해주는 Context API를 사용하는 Hook
→ props 없이 상태 공유 가능 (예: 로그인 정보, 테마 등)
*/