/**
 * @file {@pagename}.js
 * @brief {@pagename} page initialization
 */
let mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');

/* app ctrl */
let theme = require('../conf/theme.js');

/**
 * page init function
 * 
 * @param rt : root component
 */
let start = (rt) => {
    try {
        // page init here
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    theme.theme(app.root.theme());
    start(app.root);
    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */
