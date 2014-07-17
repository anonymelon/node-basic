
var http = require('http'); // Load core module http

var fileModule = require('./myModules/fileModule'); // Load file module from path
// var fileModule = require('/path/to/myModules/fileModule'); // Load file module from path

var dirModules = require('./myModules/dirModules');
var packageModules = require('./myModules/packageModules');

var thirdPartModules = require('thirdPartModules');

console.log(fileModule.getName('jeremy'));
dirModules()
packageModules()
thirdPartModules()
