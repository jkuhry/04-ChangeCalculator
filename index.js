$(function() {
    $("#yourBtn").on("click", function(){
      
      var duecost = $("#howMuchdue").val();
      var cashGiven = $("#cusGive").val();


      duecost = duecost*100;
      cashGiven = cashGiven*100;


      var change = cashGiven-duecost;
      var dollars = Math.floor(change/100);

      change = change%100;
      //change = change - 100*dollars;


      var quarters = Math.floor(change/25);
      change = change%25;

      var dimes = Math.floor(change/10);
      change = change%10;

       var nickels = Math.floor(change/5);
      change = change%5;

      var pennies = change;

      $("#dollars").text(dollars);
      $("#quarters").text(quarters);
      $("#dimes").text(dimes);
      $("#nickels").text(nickels);
      $("#pennies").text(pennies);


    })
});
    