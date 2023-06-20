import React, { useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import AllBlogs from './components/AllBlogs';

function App() {
  const [allBlogs, setAllBlogs] = useState([]);

  const handleOnSubmit = (formData) => {
     //console.log(formData)
     // Create a new array by spreading the existing blogs in the allBlogs state
     // and adding the (formData = a new blog)
    setAllBlogs([...allBlogs, formData]);
  };

  const handleDelete = (id) => {
    console.log(id);
    // this filter method creates a new array and returns an array that has specific condition 
    const remainingBlogs = allBlogs.filter((blog) => {
      return blog.id !== id; // condition returns everything that dose not match the argument (id)
    });
    setAllBlogs(remainingBlogs);
  };
  

  return (
    <div className="App">
      <h1>My Blog App</h1>
      <div className="mainContainer">
        <div className="form-div">
          <h2>Create Blog Form</h2>
          <CreateForm handleOnSubmit={handleOnSubmit} />
        </div>
        <div className="blogs">
          <h2>All Blog Posts</h2>
          <AllBlogs allBlogs={allBlogs} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;

