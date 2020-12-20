var fs = require("fs");
let data = fs.readFileSync('index.js');
console.log(data.toString());