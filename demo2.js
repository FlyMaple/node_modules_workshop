console.log(process.env.NODE_PATH);
console.log(`-----------------------------------`);

const d2_tool = require('./demo2/dir2/d2_tool');

d2_tool();

console.log(`This \x1b[33m%s\x1b[0m module.`, `demo2`);
console.log(__dirname);
console.log(`-----------------------------------`);