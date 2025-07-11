//weatherSimulator.js 모듈
export const weatherConditions = [
    "맑음",
    "흐림",
    "비",
    "폭풍",
    "눈",
    "바람",
];

export function suggestActivity(weather){
    switch(weather){
        case "맑음":
            return "Let's go hiking";
        case "흐림":
            return "rest yourself in home";
        case "비":
            return "Let's drink soju inside";
        case "폭풍":
            return "be careful, stay at home!";
        case "눈":
            return "Let's make snowman";
        case "바람":
            return "Let's go driving";
        default:
            return "luck to you";
    }
}