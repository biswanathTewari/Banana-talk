var userInput = document.querySelector("#txt-area");

var btnTranslate = document.querySelector("#btn");

var output = document.querySelector(".output");

/*--------------------------------------------------------------------------------------*/

var URL = "https://api.funtranslations.com/translate/minion.json";

var getURL = function () {
   return URL + "?text=" + userInput.value;
};

var errorHandler = function (error) {
   console.log("error occured" + error);
};

var clickHandler = function () {
   fetch(getURL())
      .then((Response) => Response.json())
      .then((json) => {
         output.innerText = json.contents.translated;
      })
      .catch(errorHandler);
};

/*---------------------------------------------------------------------------------------*/

btnTranslate.addEventListener("click", clickHandler);
