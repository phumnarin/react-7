import { useState } from "react";


function BookEdit({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
    onSubmit(book.id, title);
    console.log("New word -2", title);
    console.log("New word -2", title);
    
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
