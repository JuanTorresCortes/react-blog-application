import React from "react";

const BlogCard = ({ blog, handleDelete }) => {
  const { title, content, author, createdAt, id } = blog; // Destructure the properties from the blog object

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <div className="blog-card">
      <h3>Title: {title}</h3>
      <hr />
        <h3>Content:</h3> {content}
      <hr />
      <small>Created At: {createdAt}</small>
      <br />
      <small>Author: {author}</small>
      <br />
      <button onClick={handleDeleteClick} style={{ backgroundColor: "red" }}>
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
// This component should display each blog as individual cards.
// Each card should contain the title, content, author and creation date of the blog post.
// Additionally, each card should have a "Delete" button to remove the corresponding blog post.
