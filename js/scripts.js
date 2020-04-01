//BACK END LOGIC

var vowels = ["a", "e", "i", "o", "u"];

function firstLetter(string){
  var firstLetter = string.charAt(0);
  return first-letter;
  console.log(first-letter)
}

function way(string){
  if (first-letter === (/([vowels])/gi)){
    return true;
  }
}

function translate(string) {
  if(way === true){

    
  }
}
  
// UI LOGIC

$(document).ready(function() {
  $("#piglatin").submit(function(event){
    event.preventDefault();
    $("result").hide()
    var string = $("#sentence").val();
    
    
    console.log(string)
    $("#result").show()
  })
});


// $("#result").append(string + "way");