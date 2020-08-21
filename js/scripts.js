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
  rowsColumns(arrayLength,nospaceArray)
}

function rowsColumns(length,arrayText) {  
  let square = Math.sqrt(length)
  console.log(square)
  console.log( columns = Math.floor(square)) //ARRAY LENGTH
  console.log( rows = Math.ceil(square)) // HOW MANY ARRAYS
  let = cryptoArray = []
  let indexMod = 0
  for (let index = 0; index < columns; index +=1) {
    console.log("indexMod=",indexMod)
    console.log("LOOP 1 ROUND",index)
    for ( let index2 = 0 + indexMod; index2 < arrayText.length; index2 +=columns) {  
      console.log("LOOP 2 ROUND",index)
      if (arrayText[index2] !== undefined) {
        cryptoArray.push(arrayText[index2])      
      } 
    } indexMod += 1
  }
  console.log(cryptoArray)
} 




// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
