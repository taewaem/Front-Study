export const quotes =[
  "가장 큰 영광은 결코 넘어지지 않는 것이 아니라, 넘어질 때마다 다시 일어서는 데 있다. - 넬슨 만델라",
  "시작하는 방법은 말을 멈추고 행동을 시작하는 것이다. - 월트 디즈니",
  "당신의 시간은 한정되어 있으니, 다른 사람의 인생을 살면서 낭비하지 마라. - 스티브 잡스",
  "삶이 예측 가능하다면 그것은 더 이상 삶이 아니며, 아무런 맛도 없을 것이다. - 엘리너 루스벨트",
];

export function getRandomQuote(){
    //Math.random(): 0에서 1사이의 수 무작위 추출
    const index = Math.floor(Math.random()*quotes.length);
    return quotes[index];
    
}