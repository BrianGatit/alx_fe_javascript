document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
    const addQuoteBtn = document.getElementById('addQuoteBtn');
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');

    // ✅ 1. Quotes array: Each quote is an object with text and category
    const quotes = [
        { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
        { text: "Success is not final, failure is not fatal.", category: "Motivation" },
        { text: "You miss 100% of the shots you don't take.", category: "Sports" },
        { text: "Life is what happens when you're busy making other plans.", category: "Life" }
    ];

    // ✅ 2. Display a random quote
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.innerHTML = `
            <p><strong>Quote:</strong> ${quote.text}</p>
            <p><strong>Category:</strong> ${quote.category}</p>
        `;
    }

    // ✅ 3. Function to add a quote and update DOM
    function addQuote() {
        const text = newQuoteText.value.trim();
        const category = newQuoteCategory.value.trim();

        if (text === '' || category === '') {
            alert('Please enter both a quote and a category.');
            return;
        }

        // Add to quotes array
        const newQuote = { text, category };
        quotes.push(newQuote);

        // Update the DOM with the new quote
        quoteDisplay.innerHTML = `
            <p><strong>New Quote Added:</strong> ${newQuote.text}</p>
            <p><strong>Category:</strong> ${newQuote.category}</p>
        `;

        // Clear input fields
        newQuoteText.value = '';
        newQuoteCategory.value = '';
    }

    // ✅ 4. Event listeners
    newQuoteBtn.addEventListener('click', showRandomQuote); // Show random quote
    addQuoteBtn.addEventListener('click', addQuote);        // Add new quote

    // ✅ 5. Show one quote on load
    showRandomQuote();
});

