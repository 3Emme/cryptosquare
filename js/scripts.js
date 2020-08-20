// BUsiness Logic 

function cryptosquare (initialText){
  console.log(initialText)
  const arrayText = initialText.split("");
  console.log(arrayText)
}













// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
