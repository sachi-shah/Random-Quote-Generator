$(document).ready(function() {
  var quote;
  var author;
  
  function getQuote(){    
    var quoteAPI = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";  
    
    $.getJSON(quoteAPI, function(data) {
      
       $(".quote").text(data.quoteText);
       $(".author").text("-"+data.quoteAuthor);
    });   
  }; //getQuote function
  
    $("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + quote + " -" + author);
    });

    $("#newQuote").on("click", function(){
    getQuote();
    });
  
    getQuote();
});
