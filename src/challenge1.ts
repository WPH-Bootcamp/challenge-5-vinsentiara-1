// Define the Book type
type Book = {
  title: string;
  author: string;
  year: number;
};

// Store books here
const books: Book[] = [];

// Add a new book
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// List all books
function listBooks(): void {
  console.log("All Books:");

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Search books by title (optional parameter)
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Don't delete code below and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
