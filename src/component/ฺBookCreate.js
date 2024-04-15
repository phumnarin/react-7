import { useState } from "react";

function BookCreate({ onCreate }) {
    
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    //console.log(event.target.value, "/", title);
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title)
    setTitle('');
  }

  return (
    <div className="book-create">
      <h3>Add a books</h3>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input className='input' value={title} onChange={handleChange}></input>
        <button className="button">submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
