// References:
//  1. https://gist.github.com/branneman/8048520
//  2. https://yj1438.github.io/2017/01/05/node_path.html
//  3.
//  4.
//  5.

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                          Default                          *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
_default = () => {
    // node_module
    require('utils').test();

    // local
    require('./src/utils').test();

    // local
    require('./src/common/time/convert').convert();
};
// _default();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                          symlink                          *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// git add -f node_modules/o-src
_mklink = () => {
    var s = '../src', d = 'node_modules/o-src', fs = require('fs'); fs.exists(d, function (e) { e || fs.symlinkSync(s, d, 'dir') });
};
// _mklink();

_symlink = () => {
    // node_module
    require('utils').test();

    // local
    require('o-src/utils').test();

    // local
    require('o-src/common/time/convert').convert();
};
// _symlink();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                          global                           *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
_global = () => {
    console.log(global.__base); // undefined
    console.log(__dirname); // c:\FE\node_modules_workshop

    global.__base = `${__dirname}\\`;
    console.log(__base);

    // local
    require(__base + 'src/utils').test();

    // local
    require(__base + 'src/common/time/convert').convert();
};
// _global();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                          Module                           *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                        Environment                        *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                           Hack                            *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
_hack = () => {
    console.log(process.env.NODE_PATH); // undefined
    process.env.NODE_PATH = __dirname + '/src';
    console.log(process.env.NODE_PATH);

    require('module').Module._initPaths();

    // node_module
    require('utils').test();

    // local
    require('./src/utils').test();

    // local
    require('./src/common/time/convert').convert();
};
// _hack();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                           *
 *                           Wrapper                         *
 *                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
_wrapper = () => {
    console.log(global.rootRequire); // undefined
    global.rootRequire = (name) => {
        return require(__dirname + '/' + name);
    };
    // node_module
    require('utils').test();

    // local
    rootRequire('src/utils').test();

    // local
    rootRequire('src/common/time/convert').convert();
};
// _wrapper();