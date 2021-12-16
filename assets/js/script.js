
var DetectLanguage = require('detectlanguage');

var detectlanguage = new DetectLanguage('6ab09c2d3be1e7f3ac8d2d8c4e31fe02');

var text = "can you send";

detectlanguage.detect(text).then(function(result) {
  console.log(JSON.stringify(result));
});