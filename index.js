const express = require('express');
const cors = require('cors');

const app = express();

const books = [
  { id: 1, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

 // Ajoutez cette ligne pour activer CORS
app.use(cors());


app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(8000, () => {
  console.log('API server running on port 8000');
});