const fs = require('fs');

fs.readFile('osmodule.js', 'utf-8', (err, data)=>{
console.log(err, data) 
})
console.log("This will be shown first")
// const a = fs.readFileSync('osmodule.js')
// console.log(a.toString())
// console.log("This will be shown last")

fs.writeFile('blank.js', "This is a bhomdu", ()=>{
    console.log("Written to the file")
});
// console.log("This will be shown first")
const b= fs.writeFileSync('blank2.js', "This is a bhomdu too");
console.log(b)
