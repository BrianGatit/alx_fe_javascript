
document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
    const addQuoteBtn = document.getElementById('addQuoteBtn');
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');

    // Array of quote objects
    const quotes = [
        { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
        { text: "You miss 100% of the shots you don't take.", category: "Sports" },
        { text: "Life is what happens when you're busy making other plans.", category: "Life" }
    ];

    // Function to display a random quote
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.innerHTML = `
            <p><strong>Quote:</strong> ${quote.text}</p>
            <p><strong>Category:</strong> ${quote.category}</p>
        `;
    }

    // Function to add a new quote
    function addQuote() {
        const text = newQuoteText.value.trim();
        const category = newQuoteCategory.value.trim();

        if (text === '' || category === '') {
            alert('Please enter both quote and category.');
            return;
        }

        // Add new quote to the array
        quotes.push({ text, category });

        // Optionally show the newly added quote
        quoteDisplay.innerHTML = `
            <p><strong>New Quote Added:</strong> ${text}</p>
            <p><strong>Category:</strong> ${category}</p>
        `;

        // Clear input fields
        newQuoteText.value = '';
        newQuoteCategory.value = '';
    }

    // Attach event listeners
    newQuoteBtn.addEventListener('click', showRandomQuote);
    addQuoteBtn.addEventListener('click', addQuote);

    // Show a random quote on page load
    showRandomQuote();
});
