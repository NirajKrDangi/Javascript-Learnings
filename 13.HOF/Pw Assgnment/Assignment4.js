const prompt = require("prompt-sync")({ sigint: true });

let i = 0;
const listOfBooks = [];
do {
    const bookName = prompt("Enter Book Name: ");
    const bookAuthor = prompt("Enter Book Author Name: ");
    const bookPublishYear = parseInt(prompt("Enter Book Publish Year: "));

    // Create a new book object and push it into the array
    listOfBooks.push({ book: bookName, author: bookAuthor, publishYear: bookPublishYear });
    i++;
} while (i < 2);

// Print the list of books
console.log("Your Entered List of Books:");
console.log(listOfBooks);

const filteredAndCapitalized = listOfBooks.filter((item) => item.publishYear >= 2010);

filteredAndCapitalized.forEach((item) => {
    item.book = item.book.toUpperCase();
    item.author = item.author.toUpperCase();
});

console.log("Filtered & Capitalized Books");
console.log(filteredAndCapitalized);

