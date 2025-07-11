import {DateTime} from "luxon"

const now = DateTime.now();
console.log("current date and time", now.toString());

const dt = DateTime.local(2025,7,11,12,14)
console.log("selectd date and time", dt.toString());


const formattedDate = dt.formattedDate(DateTime.DATE_FULL);
console.log("formatted date", dt.toString());

const diff = now.diff(df,["years", "months", "days"]);
console.log("현재부터 지정된 날짜까지의 차이", diff.toObject());

