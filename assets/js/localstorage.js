var languageEl = document.getElementsByClassName("language-options")
var translationEl = document.getElementsByClassName("to-box")
var buttontranslate = document.getElementsByClassName("translate-button")
var translations = JSON.parse(localstorage.getItem("translations")) || []
var history = document.querySelector('#history-box ul')
function addHistory() {
    history.innerHTML = ""
    for (var i = 0; i < translations.length; i++) {
        var li = document.createElement("li")
        li.textContent = translations[i].language + " - " + translations[i].translation
        history.prepend(li)
    }
}

function storeTranslation() {
    var currentTranslation = {
        language: languageEl.value,
        translation: translationEl.value
    }
    translations.push(currentTranslation)
    localStorage.setItem("translations", JSON.stringify(translations))
    addHistory()
}

buttontranslate.addEventListener("click", storeTranslation)
addHistory()
