import React from 'react';
import BlogCard from './BlogCard';

const AllBlogs = ({ allBlogs, handleDelete }) => {
  return (
    <div style={{ border: "2px solid blue"}}>
      {allBlogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default AllBlogs;
// This component should map through all the blogs and render the Blog card component.
// Remember to pass down the key attribute for react.
