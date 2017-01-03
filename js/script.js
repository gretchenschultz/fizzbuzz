$( document ).ready(function() {
  
  // For loop from 1-100
  // Uses modulus operator to test if
  // current iterator value is divisible
  // and  appends correct result to the 
  // list being displayed on page.
  var MAX = 0;
  var myList = document.getElementById("list");
  while(true)
  {
    MAX = parseInt(prompt("Please enter the integer you want to FizzBuzz to or -1 to exit loop ", "100"));

    while(!MAX || (MAX < -1))
    {
     MAX = parseInt(prompt("That wasn't a valid integer. Please enter the number you want to FizzBuzz to or -1 to exit loop ", "100"));  
    }

    if(MAX == -1)
    {
      break;
    }
        
    runFizzBuzz(MAX);
  

  }
  
  
  function runFizzBuzz(MAX){
    myList.empty();
    for(i = 1; i <= MAX; i++)
    {
      if(i%3 == 0 && i%5 == 0)
      {
        $("#list").append("<li>FizzBuzz</li>");
      }
      else if(i%3 == 0)
      {
        $("#list").append("<li>Fizz</li>");
      }
      else if(i%5 == 0)
      {
        $("#list").append("<li>Buzz</li>");
      }
      else
      {
        $("#list").append("<li>" + i + "</li>");
      }
    } 
  }
});