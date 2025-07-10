
const https = require("https");


const API_KEY = "585b4f2570f34d7a93ca798e8e99fe49";
//날씨 API URL
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//날씨 정보를 가져오는 함수
function getWeather(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(
        city
    )}&units=metric&appid=${API_KEY}`;

    //Ajax 통신
    https
        .get(url, (res) => {
            if (res.statusCode !== 200) {
                console.log(`Request Failed. Status Code: ${res.statusCode}`);
                res.resume(); // 응답 스트림 종료
                return;
            }

            let data = "" //데이터를 저장할 변수
            //chunk : 통신에서 응답을 받을 때 사용하는 callback함수
            res.on("data", (chunk) => {
                data += chunk;
            });

            //데이터를 모두 받아서 끝내는 함수 => (무명의 함수로 구현)
            res.on("end", () => {
                try {
                    const weatherData = JSON.parse(data); //JSON형식으로 변환
                    //API 응답 데이터가 없으면 오류 메세지를 출력
                    if (!weatherData || !weatherData.weather || !weatherData.main || !weatherData.wind) {
                        console.log("Unexpected API response format:", weatherData);
                        return;
                    }
                    //날씨 설명 / 현재 온도(섭씨) / 습도 /풍속
                    const report = `The weather in ${weatherData.name} is currently ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C, humidity of ${weatherData.main.humidity}% and wind speed of ${weatherData.wind.speed} km/h.`;
                    console.log(report);
                } catch (err) {
                    console.log("Error parsing weather data:", err.message);
                }
            }); //on
        }).on("error", (err) => {
            console.log("Error Fetching weather:", err.message); //get
        });
}


module.exports=getWeather;