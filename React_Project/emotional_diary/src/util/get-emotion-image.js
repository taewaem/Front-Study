import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

/**
 * 감정 ID(1~5)에 따라 해당 감정에 맞는 이미지 파일을 반환
 * 감정 UI에 아이콘이나 이모티콘을 보여줄 때 사용.
 * 예:<img src={getEmotionImage(item.emotionId)} alt="감정 이미지" />
*/
export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}