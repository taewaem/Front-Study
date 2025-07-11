import randomColor from "randomcolor";
import express from "express"

const color = randomColor();
console.log(color);
console.log("----------------------------------");
const app = express();  //http요청
const PORT = 3000;

app.get("/", (req, res) => {
    const color = randomColor();
    res.send(`<h1 style="color: ${color};">Welcome to Home page</h1>`)


});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})