$(function() {
    $("#yourBtn").on("click", function(){  //this is the button process once clicked.  

      var duecost = $("#howMuchdue").val(); //getting user input.
      var cashGiven = $("#cusGive").val();


      dueCost = dueCost*100;
      cashGiven = cashGiven*100;   //start of calculation.


      var change = cashGiven-dueCost;
      var dollars = Math.floor(change/100);

      change = change%100;   

      var quarters = Math.floor(change/25);
      change = change%25;

      var dimes = Math.floor(change/10);
      change = change%10;

       var nickels = Math.floor(change/5);
      change = change%5;

      var pennies = change;     

      $("#dollars").text(dollars);  //this is my output data.
      $("#quarters").text(quarters);
      $("#dimes").text(dimes);
      $("#nickels").text(nickels);
      $("#pennies").text(pennies);


    })
});

//fixed my comments.  MS/SB/JK




    

