//Common JS
//fileManager("fs"): nodejs 내장형 모듈

const fs = require("fs");

//쓰기
function writeFile(fileName, content) {
    fs.writeFileSync(fileName, content);
}

//읽기
function readFile(fileName) {
    return fs.readFileSync(fileName, "utf-8");
}

module.exports = {
    writeFile,
    readFile
};