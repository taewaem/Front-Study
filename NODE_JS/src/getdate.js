//ESM 방식
//getdate 모듈: 현재 날짜를 문자열 형태로 반환하는 함수

export function getCurrentDate() {
    const today = new Date();
    return today.toISOString().substring(0, 10);    //YYYY-MM-DD    
}

export function getDayOfWeek(dateString) {
    const date = new Date();
    return date.getDate(); 
}

export default function formatMessage(username, message){
   return `${username}: ${message}`;
}