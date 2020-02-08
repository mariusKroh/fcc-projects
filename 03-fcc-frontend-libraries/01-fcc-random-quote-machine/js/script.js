const endpoint = "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"
const quotes = []
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

// fetch quotes and push into quotes array
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => quotes.push(...data)) //spread as argument to push each quote to new index
    .then(getRandomQuote)
    .then(getRandomColor)
    .catch(function (error) {
        console.log(error);
    });

// randomize background color
function getRandomColor() {
    const randomColor = colors[Math.round(Math.random() * (colors.length - 1))];
    document.documentElement.style.setProperty('--highlight-color', randomColor);

}

// pick & display the random Quote
function getRandomQuote() {
    const randomQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];
    const quoteText = randomQuote.quoteText;
    const quoteAuthor = (randomQuote.quoteAuthor === "" ? "unknown" : randomQuote.quoteAuthor);
    text.innerHTML = `»${quoteText}«`;
    author.innerHTML = `- ${quoteAuthor}`;
    // setup for tweetin'
    tweet.setAttribute("href", "https://twitter.com/intent/tweet?text=" + `»${quoteText}« - ${quoteAuthor}`);

}

// control functionality 
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const tweet = document.querySelector("#tweet-quote");

const newQuote = document.querySelector("#new-quote");
newQuote.addEventListener("click", getRandomQuote);
newQuote.addEventListener("click", getRandomColor);