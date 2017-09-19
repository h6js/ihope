var fs = require("fs");
var uglify = require('uglify-js');

var code = fs.readFileSync('src/ihope.js', 'utf8');
var min = uglify.minify(code);
fs.writeFileSync('dist/ihope.js', min.code, 'utf8');