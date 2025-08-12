
document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
    const addQuoteBtn = document.getElementById('addQuoteBtn');
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');

    // ✅ Array to hold quote objects
    const quotes = [
        { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
        { text: "Success is not final, failure is not fatal.", category: "Motivation" },
        { text: "You miss 100% of the shots you don't take.", category: "Sports" },
        { text: "Life is what happens when you're busy making other plans.", category: "Life" }
    ];

    // ✅ Function to display a random quote
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.innerHTML = `
            <p><strong>Quote:</strong> ${quote.text}</p>
            <p><strong>Category:</strong> ${quote.category}</p>
        `;
    }

    // ✅ Function to add a quote to the array and update DOM
    function addQuote() {
        const text = newQuoteText.value.trim();
        const category = newQuoteCategory.value.trim();

        if (text === '' || category === '') {
            alert('Please enter both quote and category.');
            return;
        }

        const newQuote = { text, category };

        // ✅ Add new quote to array
        quotes.push(newQuote);

        // ✅ Update DOM with newly added quote
        quoteDisplay.innerHTML = `
            <p><strong>New Quote Added:</strong> ${newQuote.text}</p>
            <p><strong>Category:</strong> ${newQuote.category}</p>
        `;

        // Clear form inputs
        newQuoteText.value = '';
        newQuoteCategory.value = '';
    }

    // ✅ Event listener for "Show New Quote" button
    newQuoteBtn.addEventListener('click', showRandomQuote);

    // ✅ Event listener for "Add Quote" button
    addQuoteBtn.addEventListener('click', addQuote);

    // ✅ Display one random quote on initial load
    showRandomQuote();
});
