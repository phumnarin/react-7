import { useState,useEffect } from "react";
import BookEdit from "./BookEdit";


function BookShow({ book, onDelete ,onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    console.log('test')
  },[]); 

  useEffect(() => {
    console.log("test-2");
  }, [showEdit]); 

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id,title) => {
    setShowEdit(false)
    onEdit(book.id, title);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} onEdit={onEdit} />;
  }

  //{showEdit === false ? <h3>{book.title}</h3> : <BookEdit />}
  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
