//BACK END LOGIC

output = []

function pigLatin(string){
  var firstLetter = string.charAt(0);
  
  if(firstLetter.match(/[aeiou]/g)){
    output.push(string + "way")
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