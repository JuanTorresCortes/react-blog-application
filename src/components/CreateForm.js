import React, { useState } from 'react';

const CreateForm = ({ handleOnSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState(Math.random());
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());

  const handleSubmit = (e) => {
    e.preventDefault();

    handleOnSubmit({ title, content, author, id, createdAt }); // form states = formData => invoke => handleOnSubmit(formData) @ app.js
      //zero out 
    setTitle('');
    setContent('');
    setAuthor('');
    setId(Math.random());
    setCreatedAt(new Date().toISOString())
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit" style={{ backgroundColor: "green" }}>Submit</button>
    </form>
  );
};

export default CreateForm;
//This component should include input fields and corresponding states for the blog title,
//content, and author. Additionally, it should have a "Create" button to submit the form.
