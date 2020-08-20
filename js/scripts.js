// BUsiness Logic 

function cryptosquare (initialText){
  console.log(initialText)
  const arrayText = initialText.split("");
  console.log(arrayText)
  let nospaceArray = []
  arrayText.forEach(function(letter) {
    if (letter !== " ") {
      nospaceArray.push(letter)
    }
  });
  console.log(nospaceArray);   
}









// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
