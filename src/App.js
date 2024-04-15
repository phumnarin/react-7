import { useState } from "react";
import BookCreate from "./component/ฺBookCreate";
import BookList from "./component/BooKList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookByID = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
    console.log(books, "delete");
  };

  const createBook = (title) => {
    //console.log("Title =>", title);
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
    //console.log(books);
  };

  const editBookByID = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBooks)
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookByID}  onEdit = {editBookByID}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
