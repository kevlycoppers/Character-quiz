$(document).ready(function(){
  $("#blanks form").submit(function(event){
   var hair = $("#hair").val();
   var yelling = $("#yelling").val();
   var food = $("#food").val();
   var yourself = $("#yourself").val();
   var love;

   if (hair === "Black" && (yelling === "Fight" || yelling === "Yell back") && food === "Steak" && (yourself === "Cool" || yourself === "Kick ass")) {
     love = "Superman";
   }
   else if (hair === "Black" && (yelling === "Submit" || yelling === "Yell back") && food === "Steak" && (yourself === "Cool" || yourself === "Kick ass")) {
     love = "Clark Kent";
   }
   else if (hair === "Blond" && (yelling === "Submit" || yelling === "Yell back") && food === "Steak" && (yourself === "Cool" || yourself === "Kick ass")) {
     love = "Catniss";
   }
   else if (hair === "Ginger" && yelling === "Submit" && (food === "Steak" || food === "Ramen" || food === "Salad") && (yourself === "Cool" || yourself === "Shy" || yourself === "Kick ass")) {
     love = "Carrot Top";
   }
   else if (hair === "Brown" && (yelling === "Submit" || yelling === "Fight" || yelling === "Yell back") && (food === "Salad" || food === "Steak" || food === "Ramen") &&  (yourself === "Cool" || yourself === "Shy" || yourself === "Kick ass")) {
      love = "Hugh Jackman";
    }
   else {
     love = "No one";
    }
   $("#match").show();
   $(".character").text(love)
   event.preventDefault();

  });
});
