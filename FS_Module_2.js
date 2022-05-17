const fs = require('fs');

fs.appendFile('demo.txt', 'Hello from appendFileee', (err) => {
    if (err) throw err;
    console.log("saved");
})

fs.open('demo3.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log("Done");
})

fs.writeFile('demo2.txt', "Hello WriteFile!", (err) => {
    if (err) throw err;
    console.log("Okay"); // Existing data will be wiped out
})