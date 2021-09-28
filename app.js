let btnTranslate = document.querySelector('#btnTranslate');
let txtInput = document.querySelector("#txtinput");
let outputDiv = document.querySelector("#output");

const database = {
    modes: [
        {
            name: "minion",
            heading: "Bananana Translator 🍌",
            URLs: "https://api.funtranslations.com/translate/minion.json",
            color: "#ffb703"
        },
        {
            name: "PigLatin",
            heading: "Pig Latin Translator 🐽",
            URLs: "https://api.funtranslations.com/translate/pig-latin.json",
            color: "#fec5bb"
        },
        {
            name: "mandalorian",
            heading: "Mandalorian Translator 👾",
            URLs: "https://api.funtranslations.com/translate/mandalorian.json",
            color: "#9bafd9"
        }
    ]
}

let URL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return URL + "?" + "text=" + text;
}

function errorhandler(error) {
    console.log("error occured", error);
    alert("server down try later!");
}


function clickHandler() {
    let txtinput = txtInput.value;
    fetch(getTranslationURL(txtinput)).then(res => res.json()).then(json => {
        console.log(json.contents.translated);
        console.log(json.contents.text);
        outputDiv.innerText = "translated -" + json.contents.translated;
    }).catch(errorhandler)
};

btnTranslate.addEventListener("click", clickHandler);