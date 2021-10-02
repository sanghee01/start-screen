const quotes = [
  {
    quote:
      "Success is the ability to go from one failure to another with no loss of enthusiasm.",
    author: "- Sir Winston Churchill",
  },
  {
    quote: "A mind troubled by doubt cannot focus on the course to victory.",
    author: "- Arthur Golden",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    author: "- Helen Keller",
  },
  {
    quote: "A man's character is his fate.",
    author: "- Heraclitus",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "- Bill Gates",
  },
  {
    quote: "Life is tough, but it's tougher when you're stupid.",
    author: "- John Wayne",
  },
  {
    quote:
      "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
    author: "- Abraham Lincoln",
  },
  {
    quote: "Keep true to the dreams of thy youth.",
    author: "- Friedrich von Schiller",
  },
  {
    quote: "A day without laughter is a day wasted.",
    author: "- Charlie Chaplin",
  },
  {
    quote:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "- Oprah Winfrey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
