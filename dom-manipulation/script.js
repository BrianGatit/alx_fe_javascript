
document.addEventListener('DOMContentLoaded', function () {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteBtn = document.getElementById('newQuote');
  const addQuoteBtn = document.getElementById('addQuoteBtn');
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');
  const importFile = document.getElementById('importFile');
  const exportQuotesBtn = document.getElementById('exportQuotes');

  // ✅ Load quotes from localStorage or initialize default
  let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { text: "You miss 100% of the shots you don't take.", category: "Motivation" }
  ];

  // ✅ Save quotes to localStorage
  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }

  // ✅ Show a random quote and save it to sessionStorage
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteDisplay.innerHTML = `
      <p><strong>Quote:</strong> ${quote.text}</p>
      <p><strong>Category:</strong> ${quote.category}</p>
    `;

    // ✅ Save last shown quote in sessionStorage
    sessionStorage.setItem('lastQuote', JSON.stringify(quote));
  }

  // ✅ Load last viewed quote from sessionStorage
  function loadLastViewedQuote() {
    const lastQuote = sessionStorage.getItem('lastQuote');
    if (lastQuote) {
      const quote = JSON.parse(lastQuote);
      quoteDisplay.innerHTML = `
        <p><strong>Last Viewed Quote:</strong> ${quote.text}</p>
        <p><strong>Category:</strong> ${quote.category}</p>
      `;
    } else {
      showRandomQuote();
    }
  }

  // ✅ Add a new quote
  function addQuote() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (text === '' || category === '') {
      alert('Please enter both quote and category.');
      return;
    }

    const newQuote = { text, category };
    quotes.push(newQuote);
    saveQuotes(); // Save updated list

    quoteDisplay.innerHTML = `
      <p><strong>New Quote Added:</strong> ${newQuote.text}</p>
      <p><strong>Category:</strong> ${newQuote.category}</p>
    `;

    newQuoteText.value = '';
    newQuoteCategory.value = '';
  }

  // ✅ Export quotes to a downloadable JSON file
  function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ✅ Import quotes from uploaded JSON file
  importFile.addEventListener('change', function (event) {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      try {
        const importedQuotes = JSON.parse(e.target.result);
        if (Array.isArray(importedQuotes)) {
          quotes.push(...importedQuotes);
          saveQuotes();
          alert('Quotes imported successfully!');
          showRandomQuote();
        } else {
          alert('Invalid file format.');
        }
      } catch (err) {
        alert('Error reading JSON file.');
      }
    };
    fileReader.readAsText(event.target.files[0]);
  });

  // ✅ Event Listeners
  newQuoteBtn.addEventListener('click', showRandomQuote);
  addQuoteBtn.addEventListener('click', addQuote);
  exportQuotesBtn.addEventListener('click', exportToJsonFile);

  // ✅ Load last viewed quote or show a random one
  loadLastViewedQuote();
});


