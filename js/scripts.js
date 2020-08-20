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
  let arrayLength = nospaceArray.length;
  console.log(arrayLength)
  rowsColumns(arrayLength)
}

function rowsColumns(length) {  
  let square = Math.sqrt(length)
  console.log(square)
  console.log( columns = Math.ceil(square))
  console.log( rows = Math.floor(square))
}




// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
