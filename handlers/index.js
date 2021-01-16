const homeHandler = require('./home');
const staticFiles = require('./static-files');
module.exports = [homeHandler, staticFiles];

const staticFiles = require('./static-files');
const catHandler = require('./cats');
module.exports = [homeHandler, staticFiles, catHandler];
