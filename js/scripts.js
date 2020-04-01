//BACK END LOGIC

output = [""]

function pigLatin(string){
  var firstLetter = string.charAt(0);
  var firstConsonant = string.charAt(1);
  
  if(firstLetter.match(/[aeiou]/g)) {
    output.push(string + "way");
  }else if(firstConsonant.match(/[bcdfghjklmnpqrstvwxyz]/g)) {
    newString = string.slice(1, str.length-1)
    output.push(newString + "ay")
    console.log(newString)
  }


  return output;
}


// function way(firstLetter){
//   if (first-letter === /([vowels])/g){
//     return true;
//   }
//   console.log(first-letter);
// }

// function translate(string) {
//   if(way === true){

//   }
// }

// UI LOGIC

$(document).ready(function() {
  $("#piglatin").submit(function(event){
    event.preventDefault();
    $("result").hide()
    var string = $("#sentence").val();
    
    var result = output.toString;

    
    
    $("#result").show()
  })
});


// $("#result").append(string + "way");