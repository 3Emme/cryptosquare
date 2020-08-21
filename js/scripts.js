
// BUsiness Logic 
function cryptosquare (initialText){  
  const arrayText = initialText.split("");  
  let nospaceArray = [];
  arrayText.forEach(function(letter) {
    if (letter !== " ") {
      nospaceArray.push(letter)
    }
  });   
  let arrayLength = nospaceArray.length;  
  rowsColumns(arrayLength,nospaceArray)
}

function rowsColumns(length,arrayText) {  
  let square = Math.sqrt(length);  
  let columns = Math.floor(square);  
  let = cryptoArray = [];
  let indexMod = 0;
  for (let index = 0; index < columns; index +=1) {    
    for ( let index2 = 0 + indexMod; index2 < arrayText.length; index2 +=columns) {        
      if (arrayText[index2] !== undefined) {
        cryptoArray.push(arrayText[index2])      
      } 
    } indexMod += 1;
  }
  console.log(cryptoArray)
  group(cryptoArray,arrayText)
} 

function group(array,arrayText){
  let finalArray = []
  let senCount = Math.ceil(arrayText.length / 5);  
  for (let index = 0; index < senCount; index +=1) {    
    let firstFive = array.splice(0,5);
    
    finalArray.push(firstFive.join(""))
  }
  console.log(finalArray.join(" "))
}

// Interface Logic
$(document).ready(function(){  
  $("form#crypto-form").submit(function(event){
    event.preventDefault();
    cryptosquare($("#string").val())
  })
});
