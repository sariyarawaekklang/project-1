var elem = $(".news-wrapper");
var h3 = elem.find("h3var text = h3.text()");
/* Replace this with your Google Translate API key */
var myKey = 'AIzaSyDudT5fNA7WdUcHIf8QyZ8de4_z-wkqiP8';
$.ajax({
   method: 'GET',
   url: 'https://www.googleapis.com/language/translate/v2/detect',
   data: {
      key: myKey,
      q: text
   }
}).done(function (response) {
   console.log(response.data.detections[0][0].language);
   if (response.data.detections[0][0].language == 'ar') {
      elem.addClass("news-arabic");
   }
});