//initialize
const quoteContainer = document.getElementById("txt_quote");

const quotes = [
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "In order to be irreplaceable, one must always be different. – Coco Chanel",
    "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
    "Knowledge is power. – Francis Bacon",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. – Dan Salomon",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Fix the cause, not the symptom. – Steve Maguire",
    "Optimism is an occupational hazard of programming; feedback is the treatment. – Kent Beck",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "Make it work, make it right, make it fast. – Kent Beck"
];

const quoteGenerate = () => {
    let newQuote = Math.floor(Math.random() * quotes.length);

    quoteContainer.innerText = quotes[newQuote];
}