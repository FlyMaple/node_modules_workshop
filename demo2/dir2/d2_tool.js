// const d1_1_tool = require('../dir1/dir1_1/d1_1_tool');

// module.exports = () => {
//     d1_1_tool();

//     console.log(`----- d2_tool -----`);
//     console.log(`process.env.NODE_PATH: ${process.env.NODE_PATH}`);
//     console.log(`This is \x1b[36m%s\x1b[0m module.`, `d2_tool`);
//     console.log(__dirname);
//     console.log(`-----------------------------------`);
// };

const d1_1_tool = require('dir1/dir1_1/d1_1_tool');

module.exports = () => {
    d1_1_tool();

    console.log(`----- d2_tool -----`);
    console.log(`process.env.NODE_PATH: ${process.env.NODE_PATH}`);
    console.log(`This is \x1b[36m%s\x1b[0m module.`, `d2_tool`);
    console.log(__dirname);
    console.log(`-----------------------------------`);
};