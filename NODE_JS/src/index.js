// // ES module 시스템 사용

// import {add, subtract, multiply, divide } from "./ESM_math.js";

// console.log(add(5,3));
// console.log(subtract(5,3));
// console.log(multiply(5,3));
// console.log(divide(5,3));

// ES module 시스템 사용

// import mul, {add, subtract, divide } from "./ESM_math2.js";

// // import {add, subtract, divide } from "./ESM_math2.js";
// console.log(add(5,3));
// console.log(subtract(5,3));
// console.log(divide(6,3));

// // import mul from "./ESM_math2.js";
// console.log(multiply(5,3));

import { getCurrentDate, getDayOfWeek } from "./getdate.js";
//줄여서 사용 가능
import format from "./getdate.js";

const today = getCurrentDate();
console.log("Today Date: ", today);

const specificDate = "2025-07-11";
const dayOfWeek = getDayOfWeek(specificDate);
console.log("(일요일:0, 월요일:1...", dayOfWeek);

console.log("------------------------------");
const username = "Alice";
const message = "Hello, everyone!";

console.log(format(username, message));
