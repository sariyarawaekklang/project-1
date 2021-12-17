function getLanguage() {
  var apikey = "6ab09c2d3be1e7f3ac8d2d8c4e31fe02"
  var text = document.getElementById("#get-language").value;
  console.log(text)
  var url = "https://ws.detectlanguage.com/0.2/detect?q=" + text + "&key=" + apikey
  fetch(url, {
      method: "POST",
      header: { "Content-Type": "application/json" }
  })
      .then(res => res.json())
      .then(data => console.log(data))
}
getLanguage()


function other(){
    var textel = document.getElementById("get-language").value
   
}
document.getElementsByClassName("translate-button").addEventListener("click", getLanguage()


