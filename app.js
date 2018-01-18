let currentQuote = document.querySelector(".quote").innerHTML;
let currentAuthor = document.querySelector("#author").innerHTML;

$('.tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(currentQuote + currentAuthor));

$('#new').click(() => {
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
    //console.log(a);
    currentQuote = a.quote;
    currentAuthor = a.author;
    $('.tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    document.querySelector(".quote").innerHTML = '"'+currentQuote+'"';
    document.querySelector("#author").innerHTML = a.author;
    });
});
