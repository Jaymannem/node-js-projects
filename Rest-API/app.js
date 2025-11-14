const express = require("express");
const app = express();

// middleware
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
];

// intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our book store api",
  });
});

// get all books
app.get("/get", (req, res) => {
  res.json(books);
});

// get a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different id",
    });
  }
});

// add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };

  books.push(newBook);

  res.status(201).json({
    data: newBook,
    message: "New book is added successfully!",
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const currentBook = books.find(
    (bookItem) => bookItem.id === Number(req.params.id)
  );

  if (currentBook) {
    currentBook.title = req.body.title || currentBook.title;

    res.status(200).json({
      message: `Book with ID ${Number(req.params.id)} updated successfully!`,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// delete a book
app.delete("/delete/:id", (req, res) => {
  const id = Number(req.params.id);

  const findBookIndex = books.findIndex((item) => item.id === id);

  if (findBookIndex !== -1) {
    const deletedBook = books.splice(findBookIndex, 1);
    res.status(200).json({
      message: "Book deleted successfully!",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});
