// import { getCurrentDate, getDayOfWeek } from "./getdate.js";
// //줄여서 사용 가능
// import format from "./getdate.js";

// const today = getCurrentDate();
// console.log("Today Date: ", today);

// const specificDate = "2025-07-11";
// const dayOfWeek = getDayOfWeek(specificDate);
// console.log("(일요일:0, 월요일:1...", dayOfWeek);

// console.log("------------------------------");
// const username = "Alice";
// const message = "Hello, everyone!";

// console.log(format(username, message));

// console.log("------------------------------");

import { getRandomQuote, quotes } from "./quotes.js";

console.log("랜덤 명언 생성기: ", getRandomQuote());

import { suggestActivity, weatherConditions } from "./weatherSimulator.js";

const randomIndex = Math.floor(Math.random()*weatherConditions.length);

console.log(suggestActivity( weatherConditions[randomIndex]));