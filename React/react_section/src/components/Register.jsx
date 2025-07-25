import { use } from "react";
// import { useState } from "react";


//회원가입
/**
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 */

//#1
// const Register = () => {
//     const [name, setName] = useState("");
//     const [birth, setBirth] = useState("");
//     const [country, setCountry] = useState("");
//     const [bio, setBio] = useState("");

//     const onChangeName = (e) => {
//         setName(e.target.value);    //사용자가 입력한 값으로 변경
//     }

//     const onChangeBirth = (e) => {
//         setBirth(e.target.value);    //사용자가 입력한 값으로 변경
//     }

//     const onChangeConutry = (e) => {
//         setCountry(e.target.value);    //사용자가 입력한 값으로 변경
//     }

//     const onChangeBio = (e) => {
//         setBio(e.target.value);    //사용자가 입력한 값으로 변경
//     }

//     console.log(name);
//     console.log(birth);
//     console.log(country);
//     console.log(bio);

//     // const [nation, setNation] = useState("");
//     return (

//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} placeholder={"이름을 입력하세요"} />
//                 <br />
//                 {name}
//                 {/* <hr /> */}
//                 <input value={birth} onChange={onChangeBirth} placeholder="생년월일" type="date" />
//                 <br />
//                 {/* {birth} */}
//                 {/* <hr /> */}
//                 <select value={country} onChange={onChangeConutry}>
//                     <option value=""></option>
//                     <option value="kr">한국</option>
//                     <option value="uk">영국</option>
//                     <option value="jp">일본</option>
//                     <option value="us">미국</option>
//                 </select>
//                 <br />
//                 {/* {country} */}
//                 {/* <hr /> */}
//                 <textarea value={bio} onChange={onChangeBio} />
//                 <br />
//                 {/* {bio} */}
//             </div>
//         </div>
//     );
// };


import { useState, useRef } from "react";

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        conutry: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {

        console.log(countRef.current);
        console.log(e.target.name + " : " + e.target.value);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit = () => {
        if (input.name === "") {
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    };
    // const onChangeName = (e) => {
    //     setInput({ ...input, name: e.target.value });
    // }
    // const onChangeBirth = (e) => {
    //     setInput({ ...input, birth: e.target.value });
    // }
    // const onChangeConutry = (e) => {
    //     setInput({ ...input, conutry: e.target.value });
    // }
    // const onChangeBio = (e) => {
    //     setInput({ ...input, bio: e.target.value });
    // }

    return (
        <div>

            {/* <button
                onClick={() => {
                    countRef.current++;
                    console.log(countRef.current);
                }}
            >조회수
            </button> */}

            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름을 입력하세요"} />
                <br />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    placeholder="생년월일"
                    type="date" />
                <br />
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}>;
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="uk">영국</option>
                    <option value="jp">일본</option>
                    <option value="us">미국</option>
                </select>
                <br />
            </div>
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange} />
                <br />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div >
    );

}


export default Register;