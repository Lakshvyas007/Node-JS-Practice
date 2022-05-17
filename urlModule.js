const url = require('url');

let adr = 'http://localhost:3000/default.htm?date=24&month=August';
let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata= q.query;
console.log(qdata.date , qdata.month);