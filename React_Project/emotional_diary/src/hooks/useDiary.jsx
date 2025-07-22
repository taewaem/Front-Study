import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../Context";

// 커스텀 훅 : 특정 id에 해당하는 일기 데이터를 찾아 반환하는 로직

/**
 * id 전달받음
 * DiaryStateContext에서 전체 일기 목록을 불러옴
 * 해당 id에 해당 일기를 찾아서 반환
 * 일기가 없으면 경고창을 띄우고 /로 이동
 */

const useDiary = (id) => {
    //전체 일기 배열 
    const data = useContext(DiaryStateContext);
    //[현재 id에 해당하는 일기, 나중에 해당 일기 설정]
    const [curDiaryItem, setCurDiaryItem] = useState();
    //받은 페이지로 이동
    const nav = useNavigate();

    //useEffect: []에 값이 변경되면 자동 실행되는 것
    useEffect(() => {
        //아이디에 해당하는 일기를 data에서 find()로 검색   
        const currentDiaryItem = data.find(
            // 1=="1" 숫자와 문자 비교시타입 자동변화
            (item) => String(item.id) === String(id)
        );

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }

        //일기를 찾은 경우 상태를 리턴
        setCurDiaryItem(currentDiaryItem);
    }, [id, data, nav]);        //일기 id, 전체 목록이 바뀌거나, 페이지가 이동될 때 자동 실행

    return curDiaryItem;

}

export default useDiary;
