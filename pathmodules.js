const path = require('path'); 

console.log(path.basename(__filename));
console.log(path.dirname(__dirname));
console.log(path.win32.basename(__filename));
console.log(path.extname(__filename));
console.log(path.normalize(__filename));
console.log(path.parse(__filename));