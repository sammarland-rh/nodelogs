var os = require('os');
var sleep = require('sleep');

while (1) {
    console.log("Logging from pod "+os.hostname());
}