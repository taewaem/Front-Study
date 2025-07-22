import "./EmotionItem.css"
import { getEmotionImage } from "../util/get-emotion-image"

// 일기 작성시 감정을 선택하는 버튼을 구현
const EmotionItem = ({
    emotionId,
    emotionName,
    isSelected,
    onClick
}) => {

    return (
        <div
            onClick={onClick}
            //EmotionItem에 따라서 EmotionItem_on_1 이런식으로 변경
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""
                }`}
        >
            {/* 감정에 맞는 이미지 불러오기 */}
            <img className="emotion_img" src={getEmotionImage(emotionId)} />
            <div className="emotion_name">{emotionName}</div>
        </div>
    )
};

export default EmotionItem;