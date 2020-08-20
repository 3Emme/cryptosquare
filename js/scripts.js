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
  console.log( columns = Math.ceil(square)) //ARRAY LENGTH
  console.log( rows = Math.floor(square)) // HOW MANY ARRAYS
  let = cryptoArray = []
  for (let index = 0; index < rows; index +=1)
    for (let index = 0; index < arrayText.length; index +=columns)   
      if (arrayText[index] !== undefined) {
        cryptoArray.push(arrayText[index])
      } 
  console.log(cryptoArray)            
}

// let MASTERGRID = [0, 1, 2] 
// for ROWS { build an array with length COLUMNS}



// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
