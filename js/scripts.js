//BACK END LOGIC

var vowels = ["a", "e", "i", "o", "u"];







// UI LOGIC

$(document).ready(function() {
  $("#piglatin").submit(function(event){
    event.preventDefault();
    var input = $("#sentence").val();
    
    
    var translate = function(input) {
        $("#result").append(input + "way");
    }
    console.log(input)
    translate(input);
    $("#result").show()
  })
});


// vowels.forEach(function(vowels){
//   vowelIndex = input.indexOf("a")
//   if (vowelIndex = 0) {
//     input.append("way");
//   console.log(vowelIndex);
//   }
//   debugger;
// });