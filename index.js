var translatebtn = document.querySelector("#btn-translate");
var textArea=document.querySelector("#textArea")
var outputArea=document.querySelector("#output-area")

var url="https://api.funtranslations.com/translate/hodor.json"


function translationURL(input){
  return  url+"?text="+input
}

function clickHandler(){
   var userinput= textArea.value 
   fetch(translationURL(userinput))
   .then(response => response.json())
   .then(json=> {
       var finaloutput = json.contents.translated;
       outputArea.innerText= finaloutput
   })   
   .catch(errorHandler)
}

translatebtn.addEventListener("click",clickHandler)

function errorHandler(error){
    console.log("error occured",error)
}